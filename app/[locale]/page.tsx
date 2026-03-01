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
  const tProcess = useTranslations("processPage");
  const tTrips = useTranslations("businessTripsPage");
  const tDatabase = useTranslations("databasePage");
  const [showSubs, setShowSubs] = useState(false);
  const [showPackages, setShowPackages] = useState(false);

  const navItems = [
    { name: tNav("about"), id: "about" },
    { name: tNav("why"), id: "why" },
    { name: tNav("services"), id: "services" },
    { name: tNav("baza"), id: "baza" },
    { name: tNav("start"), id: "start" },
    { name: tNav("form"), id: "form" },
    { name: tNav("risks"), id: "risks" },
    { name: tNav("partner"), id: "partner" },
    { name: tNav("contacts"), id: "contacts" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        id="subnav"
        className="fixed top-[100px] left-0 z-40 w-full border-b bg-[#9a9a9a]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="relative whitespace-nowrap text-sm font-medium text-white/90 transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <section id="about" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="mb-5">
              <h1 className="text-lg md:text-xl font-medium">{tAbout("p9")}</h1>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-6 max-w-3xl">
              {tAbout("title")}
            </h2>

            <p className="text-base leading-7 mb-8 max-w-2xl">
              {tAbout("intro")}
            </p>

            <h3 className="text-lg md:text-xl font-semibold mb-5">
              {tAbout("differenceTitle")}
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-base leading-7 marker:text-red-600">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"].map((point) => (
                <li key={point}>{tAbout(`points.${point}`)}</li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-[700px] min-w-[450px]">
              <Image
                src={canada}
                alt="Canada"
                className="w-full h-auto rounded-2xl border border-gray-200 shadow-md mt-20 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="hidden lg:flex flex-col items-center gap-10">
            <div className="w-full max-w-[700px] min-w-[450px]">
              <Image
                src={canadafull}
                alt="Canada"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>

            <div className="w-full max-w-[700px] min-w-[450px] mt-50 ">
              <Image
                src={canadafull5}
                alt="Canada"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-2 pl-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8 max-w-3xl">
              {tWhy("title")}
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-base leading-7 marker:text-red-600">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"].map(
                (point) => (
                  <li key={point}>{tWhy(`points.${point}`)}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
      <section id="services" className="pb-16 md:pb-24 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              {tServices("title")}
            </h2>

            <ul className="list-disc pl-6 space-y-3 marker:text-red-600">
              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition text-left"
                >
                  {tServices("points.p1")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("start")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition text-left"
                >
                  {tServices("points.p2")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition text-left"
                >
                  {tServices("points.p3")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("partner")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition text-left"
                >
                  {tServices("points.p4")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest")}
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition text-left"
                >
                  {tServices("points.p5")}
                </button>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[700px] min-w-[480px]">
              <Image
                src={canadafull2}
                alt="Canada"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="baza" className="py-24 bg-[#f5f6f8]  mb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[44px] font-bold mb-8">{tDatabase("title")}</h2>

          <p className="text-gray-700 leading-7 mb-6">{tDatabase("intro")}</p>

          <p className="text-gray-700 leading-7 mb-8">{tDatabase("text1")}</p>

          <h3 className="text-[20px] font-semibold mb-6">
            {tDatabase("subscriptions")}
          </h3>

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition">
            {tDatabase("button")}
          </button>
        </div>
      </section>

      <section id="start" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            {tProcess("title")}
          </h2>

          <ol className="space-y-6 text-left">
            {[1, 2, 3, 4].map((i) => (
              <li
                key={i}
                className="shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-[36px] h-[36px] bg-red-600 text-white flex items-center justify-center rounded-full font-semibold">
                    {i}
                  </div>

                  <p className="text-gray-700 leading-7">
                    {tProcess(`steps.s${i}`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="risks" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-[700px] min-w-[480px]">
              <Image
                src={canadafull3}
                alt="Risks"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-2 pl-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-8 max-w-3xl">
              {tRisks("title")}
            </h2>

            <p className="text-base leading-7 mb-6">{tRisks("text1")}</p>

            <p className="text-base leading-7">{tRisks("text2")}</p>
          </div>
        </div>
      </section>
      <section id="trips" className="py-16 md:py-20 scroll-mt-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            {tTrips("title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#f8f9fb] p-6 md:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {tTrips("visit.title")}
              </h3>

              <p className="text-gray-700 mb-4 leading-7">
                {tTrips("visit.text1")}
              </p>

              <p className="text-gray-700 mb-4 leading-7">
                {tTrips("visit.text2")}
              </p>

              <p className="text-gray-700 mb-6 leading-7">
                {tTrips("visit.text3")}
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
                {tTrips("visit.button")}
              </button>
            </div>

            <div className="bg-[#f8f9fb] p-6 md:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {tTrips("business.title")}
              </h3>

              <p className="text-gray-700 mb-4 leading-7">
                {tTrips("business.text1")}
              </p>

              <p className="text-gray-700 mb-4 leading-7">
                {tTrips("business.text2")}
              </p>

              <p className="text-gray-700 mb-6 leading-7">
                {tTrips("business.text3")}
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
                {tTrips("business.button")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="invest"
        className="bg-[#f5f6f8] py-16 md:py-20 mb-16 md:mb-20"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-gray-900 mb-6 max-w-3xl">
              {t("title")}
            </h2>

            <p className="text-gray-600 leading-7 mb-4">{t("intro")}</p>

            <p className="text-gray-600 leading-7 mb-4">{t("text1")}</p>

            <p className="text-gray-600 leading-7 mb-4">{t("text2")}</p>

            <p className="text-gray-600 leading-7">{t("text3")}</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[700px] min-w-[450px] mt-35 ml-16">
              <Image
                src={canadafull6}
                alt="Real Estate Canada"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="invest2" className=" py-20 mb-20">
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
      <section id="partner" className="pb-16 md:pb-24 scroll-mt-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold mb-6 max-w-3xl">
              {tPartner("title")}
            </h2>

            <p className="text-base leading-7 mb-6">{tPartner("intro")}</p>

            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {tPartner("listTitle")}
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-base leading-7 marker:text-red-600 mb-8">
              {["p1", "p2", "p3", "p4"].map((point) => (
                <li key={point}>{tPartner(`points.${point}`)}</li>
              ))}
            </ul>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition">
              {tPartner("button")}
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[700px] min-w-[480px] mt-30 ml-12">
              <Image
                src={canadafull4}
                alt="Risks"
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
