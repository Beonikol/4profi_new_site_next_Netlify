import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Image from "next/image";
import Reveal from "@/components/Reveal";

import AboutHero from "./AboutHero";
import "./about.css";

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "content/about/index.md");
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return (
    <main className="about-wrapper">

      {/* HERO */}
      <AboutHero title={data.title} />

      {/* PREMIUM CONTENT BLOCK */}
      <section className="about-section">
  <div className="about-floating-word">4PROFI</div>

  <Reveal>
    <div
      className="about-content prose"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </Reveal>
</section>

      {/* GALLERY */}
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

      {/* VIDEO */}
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