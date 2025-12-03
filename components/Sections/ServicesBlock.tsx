"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesBlock() {

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="services-section relative py-32 px-4 max-w-screen-xl mx-auto bg-transparent">

      {/* Фонове слово */}
      <h2
  className="
    absolute top-4 left-1/2 -translate-x-1/2
    text-[80px] md:text-[140px] lg:text-[180px]
    font-extrabold uppercase tracking-[0.06em]
    text-black/5 select-none pointer-events-none
    whitespace-nowrap
  "
>
  ПОСЛУГИ
</h2>

      {/* Заголовок */}
      <div className="relative z-10 text-center mb-20">
        <h3 className="text-4xl md:text-5xl font-bold">Наші напрямки</h3>
      </div>

      {/* Картки */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8">

        {/* Item 1 */}
        <div className="
          service-card bg-white/70 backdrop-blur-md border border-black/10
          rounded-3xl p-10 hover:-translate-y-2 hover:shadow-xl
          transition-all duration-300">
          <img
            src="/flashlight-icon.png"
            alt="Лазерне гравіювання"
            className="h-16 mx-auto mb-6 opacity-80"
          />
          <h4 className="text-xl font-semibold mb-3 text-center">
            Лазерне гравіювання
          </h4>
          <p className="text-center text-gray-600">
            Метал, дерево, шкіра, пластик — точність і довговічність.
            Серійне та індивідуальне виробництво.
          </p>
        </div>

        {/* Item 2 */}
        <div className="
          service-card bg-white/30 backdrop-blur-md border border-black/10
          rounded-3xl p-10 hover:-translate-y-2 hover:shadow-xl
          transition-all duration-300">
          <img
            src="/rainbow-icon.png"
            alt="Сублімація"
            className="h-16 mx-auto mb-6 opacity-80"
          />
          <h4 className="text-xl font-semibold mb-3 text-center">
            Сублімація
          </h4>
          <p className="text-center text-gray-600">
            Яскравий друк на чашках, тканинах, сувенірах.
            Малий та середній тираж.
          </p>
        </div>

        {/* Item 3 */}
        <div className="
          service-card bg-white/30 backdrop-blur-md border border-black/10
          rounded-3xl p-10 hover:-translate-y-2 hover:shadow-xl
          transition-all duration-300">
          <img
            src="/bulb-icon.png"
            alt="УФ-друк"
            className="h-16 mx-auto mb-6 opacity-80"
          />
          <h4 className="text-xl font-semibold mb-3 text-center">
            УФ-друк
          </h4>
          <p className="text-center text-gray-600">
            Фотореалістичні зображення на склі, пластику, металі та інших матеріалах.
          </p>
        </div>

      </div>

    </section>
  );
}
