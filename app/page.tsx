
"use client";
import { useEffect, useState } from "react";

const slides = [
  { type: "video", src: "/video1.mp4" },
  { type: "video", src: "/video2.mp4" },
  { type: "image", src: "/banner1.jpg" },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <main className="min-h-screen bg-white text-black">
           
      {/* Hero section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {current.type === "video" ? (
          <video
            src={current.src}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            src={current.src}
            alt="Slide"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-center text-white text-center pb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Любі види брендування для вас
          </h1>
          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 px-6 py-2 rounded text-white">Портфоліо</button>
            <button className="border border-white px-6 py-2 rounded">Зв’язатися</button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  index === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Секція напрямків */}
<section className="py-16 px-4 md:px-8 max-w-screen-xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">Наші напрямки</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-6 rounded-lg border shadow-sm bg-white">
      <img src="/flashlight-icon.png" alt="Гравіювання" className="h-6 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Лазерне гравіювання</h3>
      <p>Метал, дерево, шкіра, пластик — точність і довговічність. Серійне та індивідуальне виробництво.</p>
    </div>
    <div className="p-6 rounded-lg border shadow-sm bg-white">
      <img src="/rainbow-icon.png" alt="Сублімація" className="h-6 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Сублімація</h3>
      <p>Яскравий друк на чашках, тканинах, сувенірах. Малий та середній тираж.</p>
    </div>
    <div className="p-6 rounded-lg border shadow-sm bg-white">
      <img src="/bulb-icon.png" alt="УФ-друк" className="h-6 mb-4" />
      <h3 className="text-xl font-semibold mb-2">УФ-друк</h3>
      <p>Фотореалістичні зображення на склі, пластику, металі та інших матеріалах.</p>
    </div>
  </div>
</section>

{/* Акції */}
<section className="px-4 md:px-8 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
  <div className="relative rounded-lg overflow-hidden">
    <img src="/promo-left.jpg" alt="Акція 1" className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg max-w-xs">
      <p className="text-sm text-gray-700">Вибрані позиції та комплекти</p>
      <h4 className="text-lg font-bold mb-2">Акції до -50%</h4>
      <a href="/sale" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded">Дивитись</a>
    </div>
  </div>
  <div className="relative rounded-lg overflow-hidden">
    <img src="/promo-right.jpg" alt="Акція 2" className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg max-w-xs">
      <p className="text-sm text-gray-700">Готові рішення для бізнесу</p>
      <h4 className="text-lg font-bold mb-2">Термочашки та мерч</h4>
      <a href="/merch" className="inline-block bg-emerald-600 text-white px-4 py-2 rounded">Дивитись</a>
    </div>
  </div>
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
