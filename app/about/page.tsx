import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Image from "next/image";

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "content/about/index.md");
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return (
    <main className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      {/* Основний текст */}
      <div className="prose prose-lg max-w-none mb-10">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Галерея фото */}
      {data.images && data.images.length > 0 && (
        <section className="space-y-6 mb-12">
          {data.images.map((img: any, i: number) => (
            <div key={i} className="w-full flex justify-center">
              <Image
                src={img.image}
                alt={`Фото ${i + 1}`}
                width={800}
                height={600}
                className="rounded-lg shadow-md w-full max-w-[800px] object-cover"
              />
            </div>
          ))}
        </section>
      )}

      {/* Відео */}
      {data.video && (
        <div className="w-full flex justify-center mt-10">
          <video
            src={data.video}
            controls
            className="w-full max-w-[800px] rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}