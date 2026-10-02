import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  "Greenwich", "Stamford", "Darien", "New Canaan", "Westport", "Norwalk", "Fairfield", "Wilton"
];

export function ServiceArea() {
  return (
    <section id="service-area" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Where We Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Serving Southern Connecticut <br />
              <span className="italic green-gradient-text">& New York</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed text-balance">
              We bring our unparalleled landscaping expertise to the finest communities throughout Fairfield County and the greater New York area.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary border border-black/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium">{loc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-black/10 shadow-lg"
          >
            <img
              src="/atko3.jpg"
              alt="Connecticut luxury home landscaping"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
