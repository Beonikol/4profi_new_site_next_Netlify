// app/page.tsx
"use client";

import Hero from "@/components/Hero/Hero";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* НОВИЙ КІНОМАТИЧНИЙ HERO */}
      <Hero />

      {/* НАПРЯМКИ */}
      <section className="py-16 px-4 md:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
          Наші напрямки
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <Reveal delay={0.1} direction="up">
            <div className="
              p-6 rounded-3xl border bg-white min-h-[240px]
              flex flex-col justify-between
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300
            ">
              <img
                src="/flashlight-icon.png"
                alt="Лазерне гравіювання"
                className="h-14 w-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Лазерне гравіювання</h3>
              <p>
                Метал, дерево, шкіра, пластик — точність і довговічність.
                Серійне та індивідуальне виробництво.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="
              p-6 rounded-3xl border bg-white min-h-[240px]
              flex flex-col justify-between
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300
            ">
              <img
                src="/rainbow-icon.png"
                alt="Сублімація"
                className="h-14 w-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Сублімація</h3>
              <p>
                Яскравий друк на чашках, тканинах, сувенірах.
                Малий та середній тираж.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="up">
            <div className="
              p-6 rounded-3xl border bg-white min-h-[240px]
              flex flex-col justify-between
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300
            ">
              <img
                src="/bulb-icon.png"
                alt="УФ-друк"
                className="h-14 w-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">УФ-друк</h3>
              <p>
                Фотореалістичні зображення на склі, пластику,
                металі та інших матеріалах.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* АКЦІЇ */}
      <section className="px-4 md:px-8 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6 mb-24">
        <Reveal direction="left">
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
            <img
              src="/promo-left.jpg"
              alt="Акція 1"
              className="w-full h-full object-cover aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 md:p-5 rounded-2xl max-w-xs min-h-[120px] flex flex-col justify-between">
              <p className="text-sm text-gray-700 mb-1">Вибрані позиції та комплекти</p>
              <h4 className="text-lg font-bold mb-3">Акції до -50%</h4>
              <a href="/sale" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold self-start">
                Дивитись
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white">
            <img
              src="/promo-right.jpg"
              alt="Акція 2"
              className="w-full h-full object-cover aspect-[16/9] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 p-4 md:p-5 rounded-2xl max-w-xs min-h-[120px] flex flex-col justify-between">
              <p className="text-sm text-gray-700 mb-1">Готові рішення для бізнесу</p>
              <h4 className="text-lg font-bold mb-3">Термочашки та мерч</h4>
              <a href="/merch" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold self-start">
                Дивитись
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-400 to-lime-500 text-white text-center py-16 px-4 rounded-xl max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Маєш ідею? Давайте зробимо її реальністю</h2>
        <p className="mb-6 text-lg">Підкажемо матеріал, технологію та підготуємо макет під виробництво.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/portfolio" className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full">Дивитись портфоліо</a>
          <a href="/contact" className="border border-white font-semibold px-6 py-3 rounded-full">Зв’язатися</a>
        </div>
      </section>

    </main>
  );
}