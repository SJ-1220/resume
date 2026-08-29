"use client";

import { useCallback, useRef, useState } from "react";
import type { ProjectImage } from "@/content/types";

export default function ImageGallery({ images }: { images: ProjectImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ProjectImage | null>(null);

  const open = useCallback((img: ProjectImage) => {
    setActive(img);
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <>
      <div className="project-shots">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            className={img.wide ? "shot-btn shot-btn--wide" : "shot-btn"}
            onClick={() => open(img)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={img.wide ? "shot shot--wide" : "shot"}
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onClose={() => setActive(null)}
      >
        {active ? (
          <figure className="lightbox__figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
        ) : null}
        <button
          type="button"
          className="lightbox__close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>
      </dialog>
    </>
  );
}
