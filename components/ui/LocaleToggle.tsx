"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "ru", label: "RU", flag: "ru" },
    { code: "en", label: "EN", flag: "us" }
  ];

  const current = languages.find((l) => l.code === locale);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    setOpen(false);

    let newPath = pathname;

    // если URL уже содержит locale
    if (/^\/(ru|en)(\/|$)/.test(pathname)) {
      newPath = pathname.replace(/^\/(ru|en)/, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    router.replace(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Кнопка */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 items-center gap-2 rounded-lg px-3"
      >
        <Image
          src={`https://flagcdn.com/${current?.flag}.svg`}
          alt={locale}
          width={22}
          height={16}
        />
        <span className="text-sm font-medium">{current?.label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#0B1623] p-2 shadow-2xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-white ${
                locale === lang.code ? "bg-[#162334]" : ""
              }`}
            >
              <Image
                src={`https://flagcdn.com/${lang.flag}.svg`}
                alt={lang.code}
                width={22}
                height={16}
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
