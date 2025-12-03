"use client";

import { useEffect } from "react";
import "./aboutHero.css";
import Reveal from "@/components/Reveal";

type AboutHeroProps = {
  title: string;
  subtitle?: string;
};

export default function AboutHero({ title, subtitle }: AboutHeroProps) {

  // ⬇⬇⬇ ДОДАЙ ОСЬ ЦЕ ТУТ
  useEffect(() => {
    const section = document.querySelector(".about-hero");
    const onScroll = () => {
      const offset = window.scrollY;
      if (offset < 400) {
        section?.classList.add("parallax-active");
      } else {
        section?.classList.remove("parallax-active");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // ⬆⬆⬆ ДО ЦЬОГО МОМЕНТУ ВСЕ

  return (
    <section className="about-hero">
      <div className="about-hero-bg" />

      <div className="about-hero-text">
        <Reveal>
          <h1 className="about-hero-title">{title}</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="about-hero-subtitle">
            {subtitle ??
              "Виробнича студія повного циклу. Технології, які працюють на ваш бренд."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
