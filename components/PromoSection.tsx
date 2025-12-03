"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PromoSection() {
  useEffect(() => {
    gsap.from(".promo-card-left", {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".promo-wrapper",
        start: "top 90%",
      },
    });

    gsap.from(".promo-card-right", {
      x: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".promo-wrapper",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section className="relative promo-wrapper max-w-6xl mx-auto px-4 py-24 bg-transparent">
      {/* Фоновий текст АКЦІЇ */}
      <h2
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          text-[70px] md:text-[130px] lg:text-[180px]
          font-extrabold uppercase tracking-[0.06em]
          text-black/5 select-none pointer-events-none
        "
      >
        АКЦІЇ
      </h2>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 mt-20">

        {/* Left card */}
        <div
          className="
            promo-card-left group relative overflow-hidden
            rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-lg
            transition-all duration-500
          "
        >
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src="/promo-left.jpg"
              alt="Акція до -50%"
              fill
              className="
                object-cover transition-transform duration-700
                group-hover:scale-110 group-hover:-translate-y-2
              "
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-lg backdrop-blur-md p-5 rounded-2xl shadow-lg border">
            <p className="text-sm text-gray-600 mb-1">Вибрані позиції та комплекти</p>
            <h3 className="text-xl font-bold mb-3">Акції до -50%</h3>
            <a
              href="/sale"
              className="
                inline-block bg-black text-white px-5 py-2
                rounded-full text-sm font-semibold hover:bg-yellow-500
                transition-colors
              "
            >
              Дивитись
            </a>
          </div>
        </div>

        {/* Right card */}
        <div
          className="
            promo-card-right group relative overflow-hidden
            rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-lg
            transition-all duration-500
          "
        >
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src="/promo-right.jpg"
              alt="Мерч та термочашки"
              fill
              className="
                object-cover transition-transform duration-700
                group-hover:scale-110 group-hover:-translate-y-2
              "
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-lg border">
            <p className="text-sm text-gray-600 mb-1">Рішення для бізнесу</p>
            <h3 className="text-xl font-bold mb-3">Термочашки та мерч</h3>
            <a
              href="/merch"
              className="
                inline-block bg-black text-white px-5 py-2
                rounded-full text-sm font-semibold hover:bg-yellow-500
                transition-colors
              "
            >
              Дивитись
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
