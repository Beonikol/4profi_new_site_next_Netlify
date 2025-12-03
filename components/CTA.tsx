"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  useEffect(() => {
    // Поява контейнера
    gsap.fromTo(
      ".cta-container",
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
      }
    );

    // Анімація фонового слова
    gsap.fromTo(
      ".cta-bigword",
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 0.12,
        y: 0,
        scale: 1,
        duration: 2.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 90%",
        },
      }
    );

    // Reveal рамки навколо CTA
    gsap.fromTo(
      ".cta-border",
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="cta-section relative py-28 mt-24 overflow-hidden bg-black text-white rounded-3xl max-w-6xl mx-auto mb-32">

      {/* Рамка */}
      <div className="cta-border absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>

      {/* Фоновий текст */}
      <h2 className="cta-bigword absolute top-10 left-1/2 -translate-x-1/2 text-[180px] md:text-[260px] font-bold uppercase tracking-tight text-white/10 select-none pointer-events-none">
        IDEA
      </h2>

      {/* Контент CTA */}
      <div className="cta-container relative z-10 max-w-3xl mx-auto text-center px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Маєш ідею? Давайте зробимо її реальністю
        </h3>

        <p className="text-lg md:text-xl text-white/60 mb-12">
          Підкажемо матеріал, технологію та підготуємо макет під виробництво.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/portfolio"
            className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-black hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Дивитись портфоліо
          </a>

          <a
            href="/contact"
            className="px-8 py-3 text-lg font-semibold rounded-full border border-white hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Зв’язатися
          </a>
        </div>
      </div>
    </section>
  );
}
