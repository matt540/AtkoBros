import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/atko6.jpg", alt: "Manicured estate lawn" },
  { src: "/atko7.jpg", alt: "Striped lawn maintenance" },
  { src: "/atko1.jpg", alt: "Hedge and shrub trimming" },
  { src: "/atko5.jpg", alt: "Stone entrance landscaping" },
  { src: "/atko3.jpg", alt: "Connecticut farmhouse grounds" },
  { src: "/atko4.jpg", alt: "Rose garden design" },
  { src: "/atko2.jpg", alt: "Seasonal entrance plantings" },
  { src: "/p1.jpg", alt: "Estate pool with manicured hedges" },
  { src: "/p2.jpg", alt: "Hedge trimming at luxury estate" },
  { src: "/p3.jpg", alt: "Outdoor dining garden with pergola" },
  { src: "/p4.jpg", alt: "Spring tulip garden planting" },
  { src: "/p5.jpg", alt: "Waterfront infinity pool terrace" },
  { src: "/p6.jpg", alt: "Foundation planting at stone estate" },
  { src: "/p7.jpg", alt: "Holiday exterior decorating" },
  { src: "/p8.jpg", alt: "Pool and sauna installation" },
  { src: "/p9.jpg", alt: "Holiday planter arrangement" },
  { src: "/p11.jpg", alt: "Circular driveway landscaping" },
  { src: "/p12.jpg", alt: "Formal garden with greenhouse" },
  { src: "/p13.jpg", alt: "Stone step and paver design" },
  { src: "/p14.jpg", alt: "Hydrangea garden at stone home" },
  { src: "/p15.jpg", alt: "Lush foundation planting" },
];

export default function PortfolioPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/p3.jpg" alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/60" />
              <span className="text-white/80 font-medium tracking-widest uppercase text-sm">A Sampling of Our Work</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Portfolio
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => open(i)}
                className="block w-full overflow-hidden rounded-xl group cursor-zoom-in break-inside-avoid"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Call us at <a href="tel:2032531089" className="text-white font-semibold hover:underline">(203) 253-1089</a> or fill out our form for a free consultation and estimate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-semibold text-base px-10 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
            onClick={close}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
              onClick={close}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
