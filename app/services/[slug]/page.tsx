import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { marked } from "marked";
import "./service.css";

// -----------------------------------------
// SSG: генеруємо список slug
// -----------------------------------------
export async function generateStaticParams() {
  const base = path.join(process.cwd(), "content/services");

  if (!fs.existsSync(base)) return [];

  const files = fs.readdirSync(base);

  console.log("➡️ [generateStaticParams] DIR:", base);
  console.log("📄 FILES:", files);

  return files
    .filter(f => f.endsWith(".md"))
    .map(f => ({
      slug: f.replace(".md", "")
    }));
}

export const dynamic = "force-static";
export const revalidate = false;

// -----------------------------------------
// СТОРІНКА
// -----------------------------------------
export default async function ServicePage({ params }: any) {
  console.log("➡️ [ServicePage] RAW PARAMS:", params);

  const resolved = await params; // ← головне виправлення
  const slug = resolved?.slug;

  console.log("➡️ [ServicePage] RESOLVED PARAMS:", resolved);
  console.log("➡️ [ServicePage] SLUG:", slug);

  if (!slug) {
    console.log("❌ SLUG ВІДСУТНІЙ!");
    return (
      <main className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Послугу не знайдено</h1>
        <p className="text-gray-500">Slug не передано.</p>
      </main>
    );
  }

  const base = path.join(process.cwd(), "content/services");
  const filePath = path.join(base, `${slug}.md`);

  console.log("📂 FILE PATH:", filePath);

  if (!fs.existsSync(filePath)) {
    console.log("❌ FILE NOT FOUND:", filePath);
    return (
      <main className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Послугу не знайдено</h1>
        <p className="text-gray-500">Файл не знайдено: {slug}.md</p>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
  <main className="service-wrapper">

    {/* HERO */}
<section className="service-hero reveal">
  <div className="service-hero-inner">

    <h1 className="service-title premium-title">
      {data.title}
    </h1>

    {data.price && (
      <div className="price-fly">
        <span className="price-premium">{data.price} грн</span>
      </div>
    )}

  </div>
</section>

    {/* IMAGE */}
{data.preview && (
  <div className="service-image-wrapper reveal">
    <Image
      src={data.preview}
      alt={data.title}
      width={1600}   // велике базове значення
      height={900}   // під aspect-ratio 16:9
      className="service-image"
    />
  </div>
)}

    {/* CONTENT */}
    <section className="service-content reveal">
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </section>

  </main>
);
}
