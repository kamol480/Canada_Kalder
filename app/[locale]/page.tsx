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
import { Menu } from "lucide-react";

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
  className="fixed left-0 z-30 w-full border-b bg-[#9a9a9a] top-[80px] lg:top-[100px]"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="hidden items-center justify-between py-3 md:flex">
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

    <div className="py-2 md:hidden">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white [&::-webkit-details-marker]:hidden">
          <Menu className="h-5 w-5 group-open:hidden" />
          <span className="transition-transform duration-300 group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="mt-2 flex flex-col gap-2 pb-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                scrollToSection(item.id);
                const details = e.currentTarget.closest("details");
                if (details) {
                  details.removeAttribute("open");
                }
              }}
              className="rounded-lg px-4 py-2 text-left text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      </details>
    </div>
  </div>
</nav>
      <section
        id="about"
        className="mt-20 scroll-mt-28 py-12 md:mt-24 md:py-16 lg:py-20"
      >
        <div className="mx-auto md:mt-0 mt-15 grid max-w-screen-xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="mb-4">
              <h1 className="text-base font-medium md:text-lg">
                {tAbout("p9")}
              </h1>
            </div>

            <h2 className="mb-5 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {tAbout("title")}
            </h2>

            <p className="mb-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {tAbout("intro")}
            </p>

            <h3 className="mb-4 text-base font-semibold md:text-lg">
              {tAbout("differenceTitle")}
            </h3>

            <ul className="space-y-2 pl-5 text-sm leading-6 marker:text-red-600 sm:space-y-3 sm:text-base sm:leading-7">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"].map((point) => (
                <li key={point}>{tAbout(`points.${point}`)}</li>
              ))}
            </ul>
          </div>

          <div className="order-first flex justify-center lg:order-none lg:flex">
            <div className="w-full max-w-md sm:max-w-lg lg:min-w-[450px] lg:max-w-[700px]">
              <Image
                src={canada}
                alt="Canada"
                className="h-auto w-full rounded-xl border border-gray-200 object-cover shadow-sm sm:rounded-2xl lg:mt-20 lg:shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section id="why" className="scroll-mt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1 lg:flex lg:flex-col lg:items-center lg:gap-10">
            <div className="w-full lg:max-w-[700px] lg:min-w-[450px]">
              <Image
                src={canadafull}
                alt="Canada"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>

            <div className="mt-6 w-full lg:mt-50 lg:max-w-[700px] lg:min-w-[450px]">
              <Image
                src={canadafull5}
                alt="Canada"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 lg:pl-20">
            <h2 className="mb-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:mb-8 lg:text-5xl">
              {tWhy("title")}
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-sm leading-6 marker:text-red-600 sm:text-base sm:leading-7 lg:pl-6">
              {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"].map(
                (point) => (
                  <li key={point}>{tWhy(`points.${point}`)}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 pb-12 md:pb-16 lg:pb-24">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="order-1 lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl lg:mb-8 lg:text-5xl">
              {tServices("title")}
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-sm leading-6 marker:text-red-600 sm:pl-6 sm:text-base sm:leading-7">
              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-left text-blue-600 underline underline-offset-4 transition hover:text-blue-800"
                >
                  {tServices("points.p1")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("start")}
                  className="text-left text-blue-600 underline underline-offset-4 transition hover:text-blue-800"
                >
                  {tServices("points.p2")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest2")}
                  className="text-left text-blue-600 underline underline-offset-4 transition hover:text-blue-800"
                >
                  {tServices("points.p3")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("partner")}
                  className="text-left text-blue-600 underline underline-offset-4 transition hover:text-blue-800"
                >
                  {tServices("points.p4")}
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("invest")}
                  className="text-left text-blue-600 underline underline-offset-4 transition hover:text-blue-800"
                >
                  {tServices("points.p5")}
                </button>
              </li>
            </ul>
          </div>

          <div className="order-2 flex justify-center">
            <div className="w-full max-w-md sm:max-w-xl lg:max-w-[700px] lg:min-w-[480px]">
              <Image
                src={canadafull2}
                alt="Canada"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="baza"
        className="mb-16 bg-[#f5f6f8] py-14 sm:mb-20 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[44px]">
            {tDatabase("title")}
          </h2>

          <p className="mb-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
            {tDatabase("intro")}
          </p>

          <p className="mb-6 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
            {tDatabase("text1")}
          </p>

          <h3 className="mb-5 text-base font-semibold sm:text-lg md:text-xl">
            {tDatabase("subscriptions")}
          </h3>

          <button className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700 sm:w-auto sm:px-8 sm:text-base">
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
      <section id="risks" className="scroll-mt-24 py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="order-2 flex justify-center lg:order-1 lg:flex">
            <div className="w-full max-w-md sm:max-w-xl lg:max-w-[700px] lg:min-w-[480px]">
              <Image
                src={canadafull3}
                alt="Risks"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2 lg:pl-20">
            <h2 className="mb-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:mb-8 lg:text-5xl">
              {tRisks("title")}
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              {tRisks("text1")}
            </p>

            <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
              {tRisks("text2")}
            </p>
          </div>
        </div>
      </section>
      <section
        id="trips"
        className="scroll-mt-24 bg-white py-12 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl lg:mb-12 lg:text-5xl">
            {tTrips("title")}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-[#f8f9fb] p-5 sm:p-6 md:p-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold sm:text-xl md:text-2xl">
                  {tTrips("visit.title")}
                </h3>

                <p className="mb-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("visit.text1")}
                </p>

                <p className="mb-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("visit.text2")}
                </p>

                <p className="mb-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("visit.text3")}
                </p>
              </div>

              <button className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 sm:w-auto sm:px-6 sm:text-base">
                {tTrips("visit.button")}
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-[#f8f9fb] p-5 sm:p-6 md:p-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold sm:text-xl md:text-2xl">
                  {tTrips("business.title")}
                </h3>

                <p className="mb-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("business.text1")}
                </p>

                <p className="mb-3 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("business.text2")}
                </p>

                <p className="mb-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  {tTrips("business.text3")}
                </p>
              </div>

              <button className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 sm:w-auto sm:px-6 sm:text-base">
                {tTrips("business.button")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="invest"
        className="mb-12 bg-[#f5f6f8] py-12 md:mb-16 md:py-16 lg:mb-20 lg:py-20"
      >
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="order-1 lg:col-span-2">
            <h2 className="mb-5 max-w-3xl text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl">
              {t("title")}
            </h2>

            <p className="mb-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              {t("intro")}
            </p>

            <p className="mb-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              {t("text1")}
            </p>

            <p className="mb-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              {t("text2")}
            </p>

            <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              {t("text3")}
            </p>
          </div>

          <div className="order-2 flex justify-center lg:order-2">
            <div className="w-full max-w-md sm:max-w-xl lg:ml-16 lg:mt-35 lg:max-w-[700px] lg:min-w-[450px]">
              <Image
                src={canadafull6}
                alt="Real Estate Canada"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section id="invest2" className="mb-16 py-12 sm:mb-20 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-5 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[44px]">
            {start("title")}
          </h2>

          <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base">
            {start("intro")}
          </p>

          <ol className="mb-10 list-decimal space-y-2 pl-5 text-sm text-gray-600 sm:mb-12 sm:space-y-3 sm:pl-6 sm:text-base">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <li key={i}>{start(`steps.s${i}`)}</li>
            ))}
          </ol>

          <div className="mb-8">
            <button
              onClick={() => setShowSubs(!showSubs)}
              className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white sm:w-auto sm:px-6 sm:text-base"
            >
              {start("subscriptions.button")}
            </button>

            {showSubs && (
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {["basic", "extended", "premium"].map((plan) => (
                  <div
                    key={plan}
                    className="rounded-lg bg-white p-4 shadow sm:p-5"
                  >
                    <h3 className="mb-1 text-sm font-semibold sm:text-base">
                      {start(`subscriptions.plans.${plan}.name`)}
                    </h3>
                    <p className="text-sm sm:text-base">
                      {start(`subscriptions.plans.${plan}.price`)}
                    </p>
                    <p className="text-sm text-gray-600 sm:text-base">
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
              className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white sm:w-auto sm:px-6 sm:text-base"
            >
              {start("packages.button")}
            </button>

            {showPackages && (
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {["silver", "gold", "platinum"].map((pack) => (
                  <div
                    key={pack}
                    className="rounded-lg bg-white p-4 shadow sm:p-5"
                  >
                    <h3 className="mb-1 text-sm font-semibold sm:text-base">
                      {start(`packages.items.${pack}.name`)}
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base">
                      {start(`packages.items.${pack}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="partner" className="scroll-mt-24 pb-12 md:pb-16 lg:pb-24">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
          <div className="order-1 lg:col-span-2">
            <h2 className="mb-5 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl">
              {tPartner("title")}
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:mb-6">
              {tPartner("intro")}
            </p>

            <h3 className="mb-4 text-base font-semibold sm:text-lg md:text-xl">
              {tPartner("listTitle")}
            </h3>

            <ul className="mb-6 list-disc space-y-3 pl-5 text-sm leading-6 marker:text-red-600 sm:pl-6 sm:text-base sm:leading-7 lg:mb-8">
              {["p1", "p2", "p3", "p4"].map((point) => (
                <li key={point}>{tPartner(`points.${point}`)}</li>
              ))}
            </ul>

            <button className="w-full rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto sm:px-8 sm:text-base">
              {tPartner("button")}
            </button>
          </div>

          <div className="order-2 flex justify-center">
            <div className="w-full max-w-md sm:max-w-xl lg:ml-12 lg:mt-30 lg:max-w-[700px] lg:min-w-[480px]">
              <Image
                src={canadafull4}
                alt="Risks"
                className="h-auto w-full rounded-2xl border border-gray-200 object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
