import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Image from "next/image";
import { marked } from "marked";

import Reveal from "@/components/Reveal";
import AboutHero from "./AboutHero";
import "./about.css";

export default function AboutPage() {
  // 📁 Зчитуємо файл
  const filePath = path.join(process.cwd(), "content/about/index.md");
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  // 🧹 Нормалізуємо markdown щоб не ламав HTML
  const normalizedContent = content
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s*•\s+/gm, "- ")
    .replace(/•/g, "");


  return (
    <main className="about-wrapper">
      
      {/* 🟦 HERO BLOCK */}
      <AboutHero title={data.title} />

      {/* 🟨 TEXT CONTENT */}
      <section className="about-section">
        <div className="about-floating-word">4PROFI</div>

        <Reveal>
          <div
  className="prose prose-4profi px-4"
            dangerouslySetInnerHTML={{ __html: marked.parse(normalizedContent) }}
          />
        </Reveal>
      </section>

      {/* 🖼 GALLERY SECTION */}
      {data.images && data.images.length > 0 && (
        <section className="about-gallery">
          {data.images.map((img: any, i: number) => (
            <figure key={i} className="about-figure">
              <Image
                src={typeof img === "string" ? img : img.image}
                alt={`Фото ${i + 1}`}
                width={1400}
                height={900}
                className="about-img"
              />
            </figure>
          ))}
        </section>
      )}

      {/* 🎥 VIDEO BLOCK */}
      {data.video && (
        <section className="about-video-wrapper">
          <div className="about-video">
            <video src={data.video} controls className="about-video-el" />
          </div>
        </section>
      )}

    </main>
  );
}
