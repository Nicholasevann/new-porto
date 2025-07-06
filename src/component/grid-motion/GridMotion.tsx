import React, { useEffect, useRef, FC, useState } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

interface GridMotionProps {
  items?: string[];
  gradientColor?: string;
}

const GridMotion: FC<GridMotionProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Only access window if it exists
  const mouseXRef = useRef<number>(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Ensure the grid has items by default
  const totalDesktopItems = 28; // 4 rows x 7 columns for desktop

  const defaultItems = Array.from(
    { length: totalDesktopItems },
    (_, index) => `Item ${index + 1}`
  );

  const combinedItems = items.length > 0 ? items : defaultItems;

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.ticker.lagSmoothing(0);

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent): void => {
      // Only update mouse position if not in mobile mode
      if (!isMobile) {
        mouseXRef.current = e.clientX;
      }
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // 4 rows for both mobile and desktop

      // For mobile auto animation
      if (isMobile) {
        // Create an automatic animation pattern for mobile
        const time = Date.now() / 1000;
        const animationSpeed = 0.5; // Speed of the auto animation
        // Use sine wave to create smooth back and forth motion
        const position = Math.sin(time * animationSpeed) * 0.5 + 0.5; // normalized to 0-1
        mouseXRef.current = position * window.innerWidth;
      }

      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount =
          ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
            maxMoveAmount / 2) *
          direction;

        // Apply inertia and staggered stop
        gsap.to(row, {
          x: moveAmount,
          duration:
            baseDuration + inertiaFactors[index % inertiaFactors.length],
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
      removeAnimationLoop(); // Properly remove the ticker listener
    };
  }, [isMobile]);

  // Get the correct layout based on device
  const getGridLayout = () => {
    if (isMobile) {
      // Mobile: 4 rows x 4 columns = 16 items
      return {
        rows: 4,
        columns: 4,
      };
    } else {
      // Desktop: 4 rows x 7 columns = 28 items
      return {
        rows: 4,
        columns: 7,
      };
    }
  };

  const layout = getGridLayout();

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div
          className={`gridMotion-container ${isMobile ? "mobile-grid" : ""}`}
        >
          {Array.from({ length: layout.rows }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
              }}
            >
              {Array.from({ length: layout.columns }, (_, itemIndex) => {
                const contentIndex = rowIndex * layout.columns + itemIndex;
                const content =
                  combinedItems[contentIndex % combinedItems.length];
                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{ backgroundColor: "#111" }}
                    >
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
