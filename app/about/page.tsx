import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "content/about/index.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return (
    <main className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      <div
        className="text-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br/>") }}
      />

      {/* Фото галерея */}
      {data.images && data.images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.images.map((img: string, idx: number) => (
            <Image
              key={idx}
              src={img}
              alt="about photo"
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      )}

      {/* Відео */}
      {data.video && (
        <div className="mt-10">
          <video
            src={data.video}
            controls
            className="w-full max-w-3xl rounded-lg"
          />
        </div>
      )}
    </main>
  );
}
