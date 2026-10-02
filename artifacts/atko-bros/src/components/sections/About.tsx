import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Based in Greenwich, CT",
    "Fully Licensed & Insured",
    "10+ Years of Luxury Experience",
    "White-Glove Customer Service"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="/atko1.jpg"
                alt="Atko Bros team trimming hedges at a Greenwich estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl border border-black/10 shadow-xl max-w-[240px] hidden md:block"
            >
              <div className="text-4xl font-serif text-primary mb-2">10+</div>
              <div className="text-sm font-medium text-foreground">Years of Excellence in Southern CT & NY</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              Rooted in Quality, <br />
              <span className="italic green-gradient-text">Growing with Trust.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-10">
              <p>
                Atko Bros Landscaping is a premier family-owned business proudly based in Greenwich, CT. We have dedicated ourselves to transforming and maintaining the most exquisite properties across Fairfield County, CT and Westchester County, NY.
              </p>
              <p>
                We understand that a luxury estate requires more than just maintenance; it demands a visionary approach, meticulous attention to detail, and a deep understanding of local horticulture and architecture.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-foreground/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button size="lg" onClick={() => window.location.href = "/contact"}>
              Speak With Our Experts
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
