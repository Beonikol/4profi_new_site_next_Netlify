import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

export async function generateStaticParams() {
  const folder = path.join(process.cwd(), "content/services");
  const files = fs.readdirSync(folder);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/services", `${params.slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      {/* Фото-превʼю */}
      {data.preview && (
        <div className="w-full flex justify-center mb-10">
          <Image
            src={data.preview}
            alt={data.title}
            width={1000}
            height={600}
            className="rounded-lg shadow-lg object-cover max-w-[900px]"
          />
        </div>
      )}

      {/* Опис */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {/* Галерея */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="space-y-6 mb-12">
          {data.gallery.map((img: any, i: number) => {
            const src = typeof img === "string" ? img : img.image;
            return (
              <div key={i} className="w-full flex justify-center">
                <Image
                  src={src}
                  alt={`Фото ${i + 1}`}
                  width={1000}
                  height={600}
                  className="rounded-lg shadow-md object-cover max-w-[900px]"
                />
              </div>
            );
          })}
        </section>
      )}

      {/* Відео */}
      {data.video && (
        <div className="w-full flex justify-center mt-10">
          <video
            src={data.video}
            controls
            className="w-full max-w-[900px] aspect-video bg-black rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}
