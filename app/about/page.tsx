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
      
      {/* Заголовок */}
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>

      {/* Галерея Фото (перша секція після заголовка) */}
      {data.images && data.images.length > 0 && (
        <section className="space-y-6 mb-12">
          {data.images.map((img: any, i: number) => {
            const src = typeof img === "string" ? img : img.image;
            return (
              <div key={i} className="w-full flex justify-center">
                <Image
                  src={src}
                  alt={`Фото ${i + 1}`}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md w-full max-w-[800px] object-cover"
                />
              </div>
            );
          })}
        </section>
      )}

      {/* Основний текст */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Відео */}
      {data.video && (
        <div className="w-full flex justify-center mt-10">
          <div className="w-full max-w-[800px] aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <video
              src={data.video}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </main>
  );
}
