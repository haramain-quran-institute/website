import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormPopupContext";

export const metadata: Metadata = { title: "Haramain Quran Institute | Learn Quran Online", description: "Flexible, personalised online Quran learning with qualified teachers." };

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap", variable: "--font-heading" });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-accent" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-body" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-scroll-behavior="smooth" className={`${bricolage.variable} ${libre.variable} ${inter.variable}`}><body className={inter.className}><FormProvider>{children}</FormProvider></body></html>; }
