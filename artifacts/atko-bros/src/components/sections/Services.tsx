import { motion } from "framer-motion";
import {
  TreePine,
  Leaf,
  Scissors,
  Pickaxe,
  Droplets,
  Sun,
  Snowflake,
  Flame,
} from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Architectural landscape planning and installation tailored to elevate your property's natural beauty and value."
  },
  {
    icon: Scissors,
    title: "Estate Maintenance",
    description: "Comprehensive lawn care, pruning, and detailing to ensure your grounds remain immaculate year-round."
  },
  {
    icon: Pickaxe,
    title: "Hardscaping",
    description: "Custom stone patios, elegant walkways, and structural retaining walls crafted by artisan masons."
  },
  {
    icon: Leaf,
    title: "Seasonal Cleanup",
    description: "Thorough spring revitalization and fall preparation to protect and nurture your investment."
  },
  {
    icon: TreePine,
    title: "Tree & Shrub Care",
    description: "Expert pruning, planting, and health management for specimen trees and ornamental shrubs."
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Smart, efficient watering solutions designed for the specific needs of Connecticut flora."
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    description: "Architectural and landscape illumination that adds drama, safety, and nighttime elegance."
  },
  {
    icon: Snowflake,
    title: "Snow & Ice Management",
    description: "Reliable, rapid-response winter services for safe and accessible driveways and walkways."
  },
  {
    icon: Flame,
    title: "Firewood & Chimney",
    description: "Premium seasoned firewood delivery and professional chimney sweeping, inspection, and repair."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Our Expertise
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            Comprehensive <span className="italic green-gradient-text">Outdoor Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From conceptual design to meticulous ongoing care, we provide a full suite of premium services for discerning homeowners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group bg-white rounded-xl p-8 border border-black/8 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-foreground mb-3 group-hover:text-primary transition-colors" style={{ fontSize: '22px' }}>
                  {service.title}
                </h3>
                <p className="text-foreground/65 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
