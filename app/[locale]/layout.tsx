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
import { getMessages, getLocale, getTranslations } from "next-intl/server";
import Footer from "@/components/ui/Footer";
import { Menu, Search, User, X } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KALDER ENERGY",
  description: "KALDER ENERGY",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations("layout");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
       <div className="fixed top-0 left-0 z-40 w-full">
  <header className="border-b bg-white/90 backdrop-blur dark:bg-black/80">
    <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[100px] lg:px-8">
      <Link
        href="/"
        locale={locale}
        className="flex min-w-0 items-center gap-3"
      >
        <Image
          src={logoCanada}
          alt="KALDER ENERGY"
          priority
          className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        />

        <div className="">
          <div className="text-base font-bold  lg:text-xl">
            KALDER ENERGY
          </div>
          <div className="text-xs lg:text-sm text-muted-foreground">
            {t("tagline")}
          </div>
        </div>
      </Link>

      <div className="hidden flex-1 justify-center md:flex">
        <div className="relative w-[420px] max-w-full">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("search")}
            className="h-12 rounded-2xl pl-10 text-base shadow-sm"
          />
        </div>
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Link
          href="/account"
          locale={locale}
          className="flex h-12 items-center gap-2 rounded-2xl bg-red-600 px-6 text-base font-semibold text-white"
        >
          <User className="h-5 w-5" />
          {t("account")}
        </Link>

        <ThemeToggle />
        <LocaleToggle />
      </div>

      <div className="md:hidden">
        <details className="group relative">
          <summary className="flex list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
            <ThemeToggle />
            <LocaleToggle />

            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background cursor-pointer">
              <Menu className="h-5 w-5 group-open:hidden" />
              <X className="hidden h-5 w-5 group-open:block" />
            </span>
          </summary>

          <div className="absolute left-0 top-[calc(100%+12px)] w-screen border-t bg-white/95 px-4 py-4 shadow-lg backdrop-blur dark:bg-black/95">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={t("search")}
                  className="h-11 rounded-2xl pl-10 text-base shadow-sm"
                />
              </div>

              <Link
                href="/account"
                locale={locale}
                className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 text-base font-semibold text-white"
              >
                <User className="h-5 w-5" />
                {t("account")}
              </Link>
            </div>
          </div>
        </details>
      </div>
    </div>
  </header>
</div>

            <main>{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
