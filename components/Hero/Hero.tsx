"use client";
import "./hero.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="cine-hero">
      {/* Фонове відео */}
      <video className="cine-video" autoPlay loop muted playsInline>
        <source src="/uploads/video1.mp4" type="video/mp4" />
      </video>

      {/* Мʼякий туман (градієнт) — додає глибини */}
      <div className="cine-gradient"></div>

      {/* Декоративні кінематографічні картинки */}
      <Image
        src="/uploads/sample-left.jpg"
        alt="decor-left"
        width={600}
        height={600}
        className="cine-img cine-img-left"
      />

      <Image
        src="/uploads/sample-right.jpg"
        alt="decor-right"
        width={600}
        height={600}
        className="cine-img cine-img-right"
      />

      {/* Текстовий блок */}
      <div className="cine-text">
        <h1 className="cine-title-1">Створюємо бренди,</h1>
        <h2 className="cine-title-2">які помітні здалеку</h2>
        <p className="cine-subtitle">
          Націлені на результат. Упаковані зі смаком.
        </p>
      </div>
    </section>
  );
}