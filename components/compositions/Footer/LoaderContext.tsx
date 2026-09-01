"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components//layout/PageLoader";

interface LoaderContextValue {
  isLoading: boolean;
}

const LoaderContext = createContext<LoaderContextValue | undefined>(undefined);

interface LoaderProviderProps {
  children: ReactNode;
}

export function LoaderProvider({ children }: LoaderProviderProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [hasInitialLoaded, setHasInitialLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasInitialLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasInitialLoaded) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
    // This effect must run on navigation, not when the initial timer completes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const value = useMemo(() => ({ isLoading }), [isLoading]);

  return (
    <LoaderContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="page-loader" />}
      </AnimatePresence>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader(): LoaderContextValue {
  const context = useContext(LoaderContext);

  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
}
