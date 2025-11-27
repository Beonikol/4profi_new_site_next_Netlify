import fs from "fs";
import path from "path";

export default function generateStaticParams() {
  const base = path.join(process.cwd(), "content/services");

  return fs
    .readdirSync(base)
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}