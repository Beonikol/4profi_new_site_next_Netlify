"use client";
import { useState, useEffect } from "react";
import ModalPortal from "../portal/ModalPortal";

export default function FullImage({ src, full, alt }: { src: string; full: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      {/* Preview */}
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-t-xl bg-white transition-transform duration-300 group-hover:scale-[1.03]"
        onClick={() => setOpen(true)}
      />

      {/* Modal */}
      {open && (
        <ModalPortal>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999] flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={full}
                alt={alt}
                className="max-w-[92vw] max-h-[92vh] object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 text-white text-3xl bg-black/40 hover:bg-black/70 rounded-full px-2 transition"
              >
                ✖
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
