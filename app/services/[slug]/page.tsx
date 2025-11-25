import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(
    process.cwd(),
    "content/services",
    `${params.slug}.md`
  );

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return (
    <main className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      {/* Галерея */}
      {data.gallery && (
        <div className="space-y-6 mb-10">
          {data.gallery.map((img: string, i: number) => (
            <Image
              key={i}
              src={img}
              alt={`Фото ${i + 1}`}
              width={900}
              height={600}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ))}
        </div>
      )}

      {/* Відео адаптивне */}
      {data.video && (
        <div className="w-full max-w-[900px] aspect-video bg-black rounded-lg overflow-hidden shadow-lg mb-10">
          <video src={data.video} controls className="w-full h-full" />
        </div>
      )}

      {/* Прайс */}
      {data.price && (
        <div
          className="prose prose-lg mb-10"
          dangerouslySetInnerHTML={{ __html: data.price }}
        />
      )}

      {/* Основний текст */}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
