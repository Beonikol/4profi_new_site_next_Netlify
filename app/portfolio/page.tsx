import fs from "fs";
import path from "path";
import matter from "gray-matter";
import FullImage from "./FullImage";

export default function PortfolioPage() {
  const base = path.join(process.cwd(), "content/portfolio");
  const files = fs.readdirSync(base);

  interface PortfolioItem {
    title: string;
    preview: string;
    image: string;
    tag?: string;
    client?: string;
    slug: string;
  }

  const items: PortfolioItem[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(base, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);

      return {
        title: data.title || "",
        preview: data.preview || "",
        image: data.image || "",
        tag: data.tag || "",
        client: data.client || "",
        slug: file.replace(".md", "")
      };
    });

  return (
    <main className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Портфоліо робіт</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/70 backdrop-blur shadow-lg hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition"
          >
            <FullImage src={p.preview} full={p.image} alt={p.title} />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>

              {p.tag && (
                <span className="inline-block mt-2 text-xs bg-black text-white px-2 py-1 rounded-full">
                  {p.tag}
                </span>
              )}

              {p.client && (
                <p className="text-gray-500 text-xs mt-1">{p.client}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
