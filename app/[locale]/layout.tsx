import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import LocaleToggle from "@/components/ui/LocaleToggle";

import Image from "next/image";
import Link from "next/link";
import logoCanada from "@/public/2020-04-13-15.56.08.jpg";

import { Input } from "@/components/ui/input";

import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getLocale,
  getTranslations
} from "next-intl/server";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "KALDER ENERGY",
  description: "KALDER ENERGY"
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("layout");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur dark:bg-black/80">
              <div className="mx-auto flex max-w-7xl items-center gap-8 px-8 py-5">
                
                {/* ЛОГО */}
                <Link href="/" locale={locale} className="flex items-center gap-4">
                  <Image
                    src={logoCanada}
                    alt="KALDER ENERGY"
                    priority
                    className="h-16 w-16 object-contain"
                  />

                  <div className="hidden sm:block leading-tight">
                    <div className="text-xl font-bold tracking-tight">
                      KALDER ENERGY
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {t("tagline")}
                    </div>
                  </div>
                </Link>

                {/* ПОИСК */}
              <div className="flex flex-1 justify-center">
  <div className="relative w-[420px] max-w-full">

    {/* Иконка */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-4.34-4.34"/>
      <circle cx="11" cy="11" r="8"/>
    </svg>

    {/* Input */}
    <Input
      placeholder={t("search")}
      className="h-12 rounded-2xl pl-10 text-base shadow-sm"
    />

  </div>
</div>

                {/* АККАУНТ */}
           <Link
  href="/account"
  locale={locale}
  className="h-12 rounded-2xl bg-red-600 px-6 text-base font-semibold text-white flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>

  {t("account")}
</Link>
                <ThemeToggle />
                <LocaleToggle />
              </div>
            </header>

            <main>{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}
