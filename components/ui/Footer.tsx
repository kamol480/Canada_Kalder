"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-[#8f8f8f] text-white">
        <div id="contacts" className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>

            <p className="mb-2 opacity-90">+1 780 222 8808 (Канада)</p>
            <p className="mb-4 opacity-90">info@kalderenergy.com</p>

            <p className="mb-2 opacity-90">+7 905 316 8898 (Россия)</p>
            <p className="opacity-90">info@mynewcanada.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Время</h3>
            <p className="opacity-90 mb-3">Edmonton, Canada</p>
            <Clock city="Edmonton" timeZone="America/Edmonton" />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Мессенджеры</h3>

            <div className="flex flex-col gap-2">
              <Link href="#" className="hover:opacity-100 opacity-90">
                WhatsApp
              </Link>

              <Link href="#" className="hover:opacity-100 opacity-90">
                Telegram
              </Link>

              <Link href="#" className="hover:opacity-100 opacity-90">
                Viber
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>

            <p className="opacity-90">Business Immigration to Canada</p>

            <p className="opacity-70 mt-2">Trusted partner since 2020</p>
          </div>
        </div>
      </div>

      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">KALDER ENERGY — DreaMWork © 2026</p>

          <div className="flex gap-5 text-lg">
            <Link href="#" className="hover:opacity-90 transition">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:opacity-90 transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:opacity-90 transition">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:opacity-90 transition">
              <FaYoutube />
            </Link>
            <Link href="#" className="hover:opacity-90 transition">
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}