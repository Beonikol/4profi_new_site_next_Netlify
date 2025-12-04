"use client";
import { useState } from "react";

export default function FullImage({
  src,
  full,
  alt,
}: {
  src: string;
  full: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition hover:scale-105 cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <img
            src={full}
            alt={alt}
            className="max-w-[94vw] max-h-[94vh] rounded-xl shadow-xl"
          />
        </div>
      )}
    </>
  );
}
