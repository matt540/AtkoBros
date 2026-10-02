import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Scissors, Leaf, TreePine, Shovel, Flame, Snowflake,
  CheckCircle2, Wind
} from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Lawn Care",
    photo: "/atko7.jpg",
    description: "Precision lawn care that keeps your property looking immaculate every week of the growing season.",
    services: [
      "Weekly lawn cutting & edging",
      "Lawn & garden care",
      "Lawn renovation & overseeding",
      "Edging, weeding & mulching",
      "Weed control programs",
    ],
  },
  {
    icon: TreePine,
    title: "Plant & Tree Care",
    photo: "/atko1.jpg",
    description: "Expert plant health care, pruning, and seasonal planting to keep your landscape vibrant and healthy.",
    services: [
      "Plant health care",
      "Pruning of hedges, shrubs & small trees",
      "Annual planting & installation",
      "Seasonal bed maintenance",
      "Ornamental care",
    ],
  },
  {
    icon: Shovel,
    title: "Hardscaping & Masonry",
    photo: "/atko2.jpg",
    description: "Custom stonework, patios, walkways, and structural masonry crafted by skilled artisans.",
    services: [
      "Stone patios & walkways",
      "Retaining walls",
      "Masonry & stonework",
      "Excavating & trenching",
      "Drainage solutions",
    ],
  },
  {
    icon: Leaf,
    title: "Seasonal Cleanups",
    photo: "/atko3.jpg",
    description: "Thorough spring and fall cleanups that prepare your property for every season.",
    services: [
      "Spring revitalization cleanup",
      "Fall leaf & debris removal",
      "Clean-up & trash removal",
      "Power washing",
      "Emergency storm response",
    ],
  },
  {
    icon: Snowflake,
    title: "Snow & Ice Management",
    photo: "/snow.jpg",
    description: "Reliable, rapid-response winter services to keep driveways, walkways, and entries safe and clear.",
    services: [
      "Snow plowing",
      "De-icing & salting",
      "Emergency storm response",
      "Residential & commercial",
    ],
  },
  {
    icon: Flame,
    title: "Firewood & Chimney",
    photo: "/firewood.jpg",
    description: "Premium seasoned firewood delivery and professional chimney sweeping and inspection for a safe, warm season.",
    services: [
      "Firewood delivery",
      "Chimney cleaning & sweeping",
      "Chimney inspection",
      "Stacking & storage",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/p3.jpg"
            alt="Atko Bros landscaping services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Our <span className="italic text-white/90">Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-secondary border-b border-black/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-foreground/70 font-light leading-relaxed">
            For over 10 years, Atko Bros Landscaping has been providing year-round quality services making your home's appearance always pristine. We serve both residential and commercial properties across Southern CT & NY and are fully licensed and insured.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""}`}
              >
                {/* Image Panel */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  {cat.photo ? (
                    <img
                      src={cat.photo}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <cat.icon className="w-24 h-24 text-primary/20" strokeWidth={1} />
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {cat.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="font-medium">{s}</span>
                      </li>
                    ))}
                  </ul>
                  {cat.title === "Firewood & Chimney" && (
                    <a
                      href="/firewood"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:underline underline-offset-4 transition-colors"
                    >
                      See Firewood Pricing →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wind className="w-10 h-10 text-white/40 mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Call us at <a href="tel:2032531089" className="text-white font-semibold hover:underline">(203) 253-1089</a> or fill out our form for a free consultation and estimate.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-10 text-base">
            <a href="/contact">
              Get a Free Estimate
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
