"use client";
import "./hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="cine-hero">

      {/* ФОН-ВІДЕО */}
      <video className="cine-video" autoPlay loop muted playsInline>
        <source src="/uploads/video1.mp4" type="video/mp4" />
      </video>

      {/* ТУМАН */}
      <div className="cine-gradient"></div>

      {/* ТЕКСТ */}
      <div className={`cine-text-left ${visible ? "show" : ""}`}>
        <h1 className="cine-title-1">Створюємо бренди,</h1>
        <h2 className="cine-title-2">які помітні здалеку</h2>
        <p className="cine-subtitle">
          Націлені на результат. Упаковані зі смаком.
        </p>
      </div>
    </section>
  );
}
