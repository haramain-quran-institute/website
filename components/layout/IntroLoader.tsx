"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
} from "react";
import { usePathname } from "next/navigation";
import favicon from "@/assets/favicon.svg";
import styles from "./IntroLoader.module.css";

const LOADER_DURATION_MS = 2150;
const REDUCED_MOTION_DURATION_MS = 650;

export default function IntroLoader() {
  const pathname = usePathname();
  const timerRef = useRef<number | null>(null);
  const lastStartRef = useRef({ pathname: "", time: 0 });
  const [isMounted, setIsMounted] = useState(true);
  const [animationCycle, setAnimationCycle] = useState(0);
  const previousPathname = useRef<string | null>(null);

  const finishLoader = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    document.body.classList.remove("haramain-loader-active");
    setIsMounted(false);
  }, []);

  const startLoader = useCallback(
    (nextPathname: string, restartAnimation: boolean) => {
      const now = window.performance.now();
      const isDuplicateTrigger =
        restartAnimation &&
        lastStartRef.current.pathname === nextPathname &&
        now - lastStartRef.current.time < 250;

      if (isDuplicateTrigger) return;

      lastStartRef.current = { pathname: nextPathname, time: now };

      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      if (restartAnimation) {
        setAnimationCycle((cycle) => cycle + 1);
      }

      setIsMounted(true);
      document.body.classList.add("haramain-loader-active");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const duration = prefersReducedMotion
        ? REDUCED_MOTION_DURATION_MS
        : LOADER_DURATION_MS;

      timerRef.current = window.setTimeout(finishLoader, duration + 100);
    },
    [finishLoader],
  );

  useEffect(() => {
    startLoader(pathname, false);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      document.body.classList.remove("haramain-loader-active");
    };
    // The first mount is intentionally a single loader cycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (previousPathname.current === null) {
      previousPathname.current = pathname;
      return;
    }

    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      startLoader(pathname, true);
    }
  }, [pathname, startLoader]);

  useEffect(() => {
    const restartForHistoryNavigation = () => {
      startLoader(window.location.pathname, true);
    };
    const restartForPageRestore = (event: PageTransitionEvent) => {
      if (event.persisted) restartForHistoryNavigation();
    };

    window.addEventListener("popstate", restartForHistoryNavigation);
    window.addEventListener("pageshow", restartForPageRestore);

    return () => {
      window.removeEventListener("popstate", restartForHistoryNavigation);
      window.removeEventListener("pageshow", restartForPageRestore);
    };
  }, [startLoader]);

  if (!isMounted) return null;

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    finishLoader();
  };

  return (
    <div
      key={`${pathname}-${animationCycle}`}
      className={styles.loader}
      aria-hidden="true"
      data-haramain-intro-loader
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.mark}>
        <Image
          src={favicon}
          alt=""
          priority
          className={`${styles.markImage} ${styles.faintMark}`}
        />
        <Image
          src={favicon}
          alt=""
          priority
          className={`${styles.markImage} ${styles.solidMark}`}
        />
      </div>
    </div>
  );
}
