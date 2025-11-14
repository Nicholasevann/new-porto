import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface ChromaItem {
  image: string | StaticImageData;
  images?: string[];
  title: string;
  subtitle: string;
  description?: string;
  handle?: string;
  location?: string;
  tags?: string[];
  borderColor?: string;
  gradient?: string;
  url?: string;
  type?: "website" | "mobile" | "shopify";
  video?: string; // <-- Add this line
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  columns?: number;
  rows?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  caseStudy?: string;
}

type SetterFn = (v: number | string) => void;

export const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  caseStudy,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items ?? [];

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<ChromaItem | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item: ChromaItem) => {
    setSelected(item);
    setModalOpen(true);
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  // Responsive orientation
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;

  return (
    <>
      <div
        ref={rootRef}
        className={`${
          caseStudy === "mobile" ? "chroma-grid-mobile" : "chroma-grid"
        } ${className}`}
        style={
          {
            "--r": `${radius}px`,
            "--cols": columns,
            "--rows": rows,
          } as React.CSSProperties
        }
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {data.map((c, i) => (
          <article
            key={i}
            className={`${
              caseStudy === "mobile" ? "chroma-card-mobile" : "chroma-card"
            } ${c.type || "website"}`}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c)}
            style={
              {
                "--card-border": c.borderColor || "transparent",
                "--card-gradient": c.gradient,
                cursor: "pointer",
              } as React.CSSProperties
            }
          >
            <div className="chroma-img-wrapper">
              <Image
                width={400}
                height={400}
                src={c.image}
                alt={c.title}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  aspectRatio: isMobile ? "3/4" : "16/9",
                  borderRadius: "16px",
                }}
              />
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
        <div ref={fadeRef} className="chroma-fade" />
      </div>

      {/* Modal Popup */}
      {modalOpen && selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-lg p-5 md:p-10">
          <div
            className="relative bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl md:p-6 w-full flex flex-col items-center"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Shopify Video Popup */}
            {caseStudy === "shopify" && selected.video && (
              <video
                src={selected.video}
                controls
                autoPlay
                loop
                className="w-full md:w-2/3 2xl:w-1/2"
                style={{
                  borderRadius: "16px",
                  marginBottom: "2rem",
                }}
              />
            )}
            {/* Swiper Images */}
            {(!selected.video || caseStudy !== "shopify") &&
              selected.images &&
              selected.images.length > 0 && (
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  style={{
                    width: "100%",
                    height: isMobile ? 350 : 550,
                    borderRadius: "16px",
                  }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {selected.images.map((img, idx) => (
                    <SwiperSlide key={idx} className="rounded">
                      <Image
                        src={img}
                        alt={selected.title + " image " + idx}
                        fill
                        style={{
                          objectFit: "contain",
                          borderRadius: "16px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            {/* Title & Description */}
            <div className="flex flex-col p-5 md:p-0 md:mt-10 max-w-4xl">
              <h2 className="text-xl font-bold text-black">{selected.title}</h2>
              <p className="mt-2 text-gray-800">
                {selected.description || selected.subtitle}
              </p>
              <button
                className="mt-6 px-4 py-2 rounded-lg bg-black/60 text-white hover:bg-black/80 transition"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChromaGrid;
