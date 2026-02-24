"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import canada from "@/public/wsi-imageoptim-Immigration-Canada-big-1-768x401.jpg";
import canadafull from "@/public/canadafull.jpg";
import canadafull2 from "@/public/canadaflag1-1536x864.jpg";
import canadafull3 from "@/public/canda3.jpg";
import canadafull4 from "@/public/kanada-biznes-1.jpg";
import canadafull5 from "@/public/kak-uehat-v-kanadu.jpg";
import canadafull6 from "@/public/can2.png";

import { useState } from "react";

export default function AboutPage() {
  const tAbout = useTranslations("about");
  const tWhy = useTranslations("why");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("servicesPage");
  const tRisks = useTranslations("risksPage");
  const tPartner = useTranslations("partnerPage");
  const start = useTranslations("startPage");
  const t = useTranslations("realEstatePage");

  const [showSubs, setShowSubs] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  // ✅ ТОЛЬКО ИЗМЕНЕНИЕ: href -> id (контент не трогаем)
  const navItems = [
    { name: tNav("about"), id: "about" },
    { name: tNav("why"), id: "why" },
    { name: tNav("services"), id: "services" },
    { name: tNav("start"), id: "start" },
    { name: tNav("risks"), id: "risks" },
    { name: tNav("form"), id: "form" },
    { name: tNav("contacts"), id: "contacts" },
    { name: tNav("partner"), id: "partner" },
  ];

  // ✅ ТОЛЬКО ДОБАВЛЕНО: плавный скролл
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className="w-full border-b  dark:border-white/10 bg-[#9a9a9a] dark:bg-[#0b1220]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-3">
          {/* ✅ ТОЛЬКО ИЗМЕНЕНИЕ: Link -> button (стили те же) */}
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium text-white/90 dark:text-white/70 transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* ✅ ТОЛЬКО ДОБАВЛЕНО: id + scroll-mt-24 (контент не трогаем) */}
      <section id="about" className=" py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <h1 className="text-[24px] font-medium ">{tAbout("p9")}</h1>
            </div>

            <h2 className="text-[44px] leading-[1.15] font-bold  mb-6 max-w-3xl">
              {tAbout("title")}
            </h2>

            <p className="text-[16px]  leading-7 mb-8 max-w-2xl">
              {tAbout("intro")}
            </p>

            <h3 className="text-[20px] font-semibold  mb-5">
              {tAbout("differenceTitle")}
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-[16px]  leading-7 marker:text-red-600">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"].map((point) => (
                <li key={point}>{tAbout(`points.${point}`)}</li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <div className="w-[500px] h-[500px] flex items-center justify-center">
              <Image src={canada} alt="Canada" className="" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className=" pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto flex  justify-evenly   gap-20 items-start">
          <div className="flex flex-col">
            <div className="hidden lg:block lg:col-span-1 order-1">
              <div className="w-full flex items-start justify-center">
                <div className="relative w-[600px] h-[600px]  flex items-center justify-center p-6">
                  <Image src={canadafull} alt="Canada" className="" priority />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1 order-1">
              <div className="w-full flex items-start justify-center">
                <div className="relative w-[600px] h-[600px] mt-[-100px] flex items-center justify-center p-6">
                  <Image src={canadafull5} alt="Canada" className="" priority />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 order-2 px-10">
            <h2 className="text-[44px] leading-[1.15] font-bold  mb-8 max-w-3xl">
              {tWhy("title")}
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-[16px]  leading-7 marker:text-red-600">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"].map(
                (point) => (
                  <li key={point}>{tWhy(`points.${point}`)}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="risks" className=" pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="hidden lg:block">
            <div className="w-[400px] h-[400px] flex items-center justify-center">
              <Image src={canadafull3} alt="Risks" className="" priority />
            </div>
          </div>

          <div className="lg:col-span-2 pl-15">
            <h2 className="text-[44px] leading-[1.15] font-bold  mb-8 max-w-3xl">
              {tRisks("title")}
            </h2>

            <p className="text-[16px]  leading-7 mb-6">{tRisks("text1")}</p>

            <p className="text-[16px]  leading-7">{tRisks("text2")}</p>
          </div>
        </div>
      </section>

      <section id="invest2" className="bg-[#f5f6f8] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[44px] font-bold mb-6">{start("title")}</h2>

          <p className="mb-8 text-gray-600">{start("intro")}</p>

          <ol className="list-decimal pl-6 space-y-3 text-gray-600 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <li key={i}>{start(`steps.s${i}`)}</li>
            ))}
          </ol>

          <div className="mb-8">
            <button
              onClick={() => setShowSubs(!showSubs)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg"
            >
              {start("subscriptions.button")}
            </button>

            {showSubs && (
              <div className="mt-6 space-y-4">
                {["basic", "extended", "premium"].map((plan) => (
                  <div key={plan} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">
                      {start(`subscriptions.plans.${plan}.name`)}
                    </h3>
                    <p>{start(`subscriptions.plans.${plan}.price`)}</p>
                    <p className="text-gray-600">
                      {start(`subscriptions.plans.${plan}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowPackages(!showPackages)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg"
            >
              {start("packages.button")}
            </button>

            {showPackages && (
              <div className="mt-6 space-y-4">
                {["silver", "gold", "platinum"].map((pack) => (
                  <div key={pack} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold">
                      {start(`packages.items.${pack}.name`)}
                    </h3>
                    <p className="text-gray-600">
                      {start(`packages.items.${pack}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="services" className="pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-[44px] font-bold mb-8">{tServices("title")}</h2>

            <ul className="list-disc pl-6 space-y-3 marker:text-red-600">
              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer text-left"
                >
                  {tServices("points.p1")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("start")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer text-left"
                >
                  {tServices("points.p2")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer text-left"
                >
                  {tServices("points.p3")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("start")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer text-left"
                >
                  {tServices("points.p4")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition cursor-pointer text-left"
                >
                  {tServices("points.p5")}
                </button>
              </li>
            </ul>
          </div>

          <Image src={canadafull2} alt="Canada" />
        </div>
      </section>
      <section id="invest" className="bg-[#f5f6f8] py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-[44px] leading-[1.15] font-bold text-gray-900 mb-6 max-w-3xl">
              {t("title")}
            </h2>

            <p className="text-gray-600 leading-7 mb-4">{t("intro")}</p>
            <p className="text-gray-600 leading-7 mb-4">{t("text1")}</p>
            <p className="text-gray-600 leading-7 mb-4">{t("text2")}</p>

            <p className="text-gray-600 leading-7">{t("text3")}</p>
          </div>
          <div className="w-[500px]">
            <Image
              src={canadafull6}
              alt="Real Estate Canada"
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
        </div>
      </section>
      <section id="partner" className=" pb-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-[44px] leading-[1.15] font-bold  mb-6 max-w-3xl">
              {tPartner("title")}
            </h2>

            <p className="text-[16px]  leading-7 mb-6">{tPartner("intro")}</p>

            <h3 className="text-[20px] font-semibold  mb-4">
              {tPartner("listTitle")}
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-[16px]  leading-7 marker:text-red-600 mb-8">
              {["p1", "p2", "p3", "p4"].map((point) => (
                <li key={point}>{tPartner(`points.${point}`)}</li>
              ))}
            </ul>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
              {tPartner("button")}
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-[500px] h-[500px] flex items-center justify-center">
              <Image src={canadafull4} alt="Risks" className="" priority />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
