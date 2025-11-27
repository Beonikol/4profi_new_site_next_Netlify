import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← ось ключ, без цього ніяк

  const base = path.join(process.cwd(), "content/services");
  const filePath = path.join(base, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="py-16 px-4 max-w-4xl mx-auto">
        Послуга не знайдена.
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      {data.preview && (
        <Image
          src={data.preview}
          alt={data.title}
          width={1000}
          height={600}
          className="rounded-lg shadow-lg object-cover max-w-[900px] mx-auto mb-10"
        />
      )}

      {data.price && (
        <div className="text-xl font-semibold mb-6">{data.price}</div>
      )}

      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {Array.isArray(data.gallery) && data.gallery.length > 0 && (
        <section className="space-y-6 mb-12">
          {data.gallery.map((item: any, i: number) => {
            const src = typeof item === "string" ? item : item.image;
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

      {data.video && (
        <div className="w-full flex justify-center mt-10">
          <video
            src={data.video}
            controls
            className="w-full max-w-[900px] aspect-video bg-black rounded-lg shadow-lg"
          ></video>
        </div>
      )}
    </main>
  );
}