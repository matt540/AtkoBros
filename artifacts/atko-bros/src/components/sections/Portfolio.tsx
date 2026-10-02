import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Lawn Maintenance",
    location: "Greenwich, CT",
    image: "/atko6.jpg",
    size: "large"
  },
  {
    title: "Tree & Shrub Care",
    location: "Greenwich, CT",
    image: "/atko1.jpg",
    size: "small"
  },
  {
    title: "Hardscapes",
    location: "Darien, CT",
    image: "/atko2.jpg",
    size: "small"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="pt-24 md:pt-32 pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Portfolio of Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Crafting Landscape <span className="italic green-gradient-text">Masterpieces</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-md ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-serif text-white mb-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            variant="outline"
            className="px-12 py-6 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium tracking-wide"
          >
            <a href="/portfolio">
              View Our Full Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
