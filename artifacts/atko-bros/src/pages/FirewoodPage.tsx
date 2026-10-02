import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Flame, Truck, MessageSquare, Layers } from "lucide-react";

const seasonedPrices = [
  { label: "Delivered & Dumped", sub: "1 Face Cord — Approx. 8' × 4' × 1 Row", price: "$300" },
  { label: "Delivered & Stacked", sub: "1 Face Cord — Approx. 8' × 4' × 1 Row", price: "$350" },
];

const kilnPrices = [
  { label: "Full Face Cord", sub: "Delivered & Stacked — 8ft × 4ft × 16in deep", price: "$460" },
  { label: "Half Face Cord", sub: "Delivered & Stacked — 4ft × 4ft × 16in deep", price: "$250" },
];

const racks = [
  { size: "4×4", price: "$250", img: "/rack-4x4.jpg" },
  { size: "8×4", price: "$350", img: "/rack-8x4.jpg" },
];

export default function FirewoodPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/firewood.jpg" alt="Firewood" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/60" />
              <span className="text-white/80 font-medium tracking-widest uppercase text-sm">Premium Wood Delivery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Seasoned Firewood &amp; <span className="italic">Kiln Dried Wood</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Order notice */}
      <div className="bg-primary text-white text-center py-4 px-4">
        <p className="font-medium tracking-wide text-base">
          📱 Please <strong>TEXT MESSAGE</strong> all orders to{" "}
          <span className="underline underline-offset-2">(203) 253-1089</span>
        </p>
      </div>

      {/* ── SPLIT SECTION ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Seasoned Firewood */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white px-8 py-16 lg:px-14 flex flex-col border-r border-black/8"
        >
          <h2 className="text-4xl font-serif text-foreground mb-4 leading-tight">Seasoned Firewood</h2>
          <p className="text-foreground/70 font-light leading-relaxed mb-2">
            Atko Bros. Landscaping is the new home of <strong>Firewood by Gus</strong>, based in Greenwich, CT — serving Fairfield and Westchester counties since 1975.
          </p>
          <p className="text-foreground/60 text-sm font-light leading-relaxed flex items-start gap-2 mb-8">
            <Truck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            Delivered to Greenwich, Cos Cob, Old Greenwich, Riverside, Byram and surrounding areas in Fairfield County, CT and Westchester County, NY.
          </p>

          <h3 className="text-xl font-serif text-foreground mb-4">Pricing</h3>
          <div className="flex flex-col gap-4 mb-6">
            {seasonedPrices.map((item) => (
              <div key={item.label} className="bg-secondary rounded-xl p-5 border border-black/8 flex justify-between items-start gap-4">
                <div>
                  <p className="font-serif text-lg text-foreground mb-0.5">{item.label}</p>
                  <p className="text-foreground/60 text-sm">{item.sub}</p>
                </div>
                <span className="text-2xl font-bold text-primary shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground/60 text-sm">
            Delivery prices based on a 10-mile radius and may vary. Please contact us for a specific delivery price and time estimate.
          </p>
        </motion.div>

        {/* RIGHT — Kiln Dried */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a2e1a] px-8 py-16 lg:px-14 flex flex-col"
        >
          <h2 className="text-4xl font-serif text-white mb-4 leading-tight">Kiln Dried Firewood</h2>
          <p className="text-white/80 font-light leading-relaxed mb-2">
            Top quality <strong className="text-white">Kiln Dried Firewood</strong> — delivered and stacked at the best prices <span className="text-primary font-semibold">GUARANTEED</span>. Burns hotter, cleaner, and produces less smoke than seasoned wood.
          </p>
          <p className="text-white/50 text-sm font-light leading-relaxed flex items-start gap-2 mb-8">
            <Truck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            Delivered to Greenwich, Cos Cob, Old Greenwich, Riverside, Byram and surrounding areas in Fairfield County, CT and Westchester County, NY.
          </p>

          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-white/40" />
            <span className="text-white/60 font-medium tracking-widest uppercase text-sm">Premium Grade</span>
          </div>
          <h3 className="text-xl font-serif text-white mb-4">Pricing</h3>
          <div className="flex flex-col gap-4 mb-6">
            {kilnPrices.map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-5 border border-white/10 flex justify-between items-start gap-4">
                <div>
                  <p className="font-serif text-lg text-white mb-0.5">{item.label}</p>
                  <p className="text-white/50 text-sm">{item.sub}</p>
                </div>
                <span className="text-2xl font-bold text-primary shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm">
            Prices based on a 10-mile delivery radius and may vary. Please contact us for a specific delivery price and time estimate.
          </p>
        </motion.div>
      </section>

      {/* ── WOODHAVEN RACKS ── */}
      <section className="py-20 bg-secondary border-t border-black/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-foreground mb-8 flex items-center justify-center gap-3">
              <Layers className="w-6 h-6 text-primary" /> Woodhaven Firewood Racks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {racks.map((r) => (
                <div key={r.size} className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-sm">
                  <img src={r.img} alt={`Woodhaven ${r.size} rack`} className="w-full h-52 object-cover" />
                  <div className="p-5 flex justify-between items-center">
                    <p className="font-serif text-xl text-foreground">{r.size} Rack</p>
                    <p className="text-primary font-bold text-xl">{r.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── READY TO ORDER CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="w-10 h-10 text-white/40 mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Text message your order or call us directly — we'll get back to you with delivery timing and pricing.
          </p>
          <div className="inline-flex items-center gap-3 bg-white text-primary font-semibold text-lg px-10 py-4 rounded-full">
            <MessageSquare className="w-5 h-5" />
            (203) 253-1089
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
