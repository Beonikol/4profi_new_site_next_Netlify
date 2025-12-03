import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "error";
export const revalidate = 0;

interface ServiceItem {
  title: string;
  preview: string;
  slug: string;
}

export default function ServicesPage() {
  const dir = path.join(process.cwd(), "content/services");

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".md"));

  const services: ServiceItem[] = files.map((filename) => {
    const filepath = path.join(dir, filename);
    const file = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(file);
    const slug = filename.replace(".md", "");

    return {
      ...data,
      slug,
    } as ServiceItem;
  });

  return (
    <main className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Види послуг</h1>

      {services.length === 0 && (
        <p className="text-gray-600">Послуги ще не додано.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Link
            href={`/services/${s.slug}`}
            key={i}
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="w-full h-56 relative">
              {s.preview && (
                <Image
                  src={s.preview}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold">{s.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
