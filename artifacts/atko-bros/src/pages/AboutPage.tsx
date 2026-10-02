import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2 } from "lucide-react";


const values = [
  "Family-owned & operated since 2013",
  "Licensed & fully insured",
  "20+ dedicated team members",
  "Serving Fairfield County, CT & Westchester County, NY",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/truck.jpg" alt="Atko Bros Landscaping truck" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/60" />
              <span className="text-white/80 font-medium tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              About <span className="italic text-white/90">Atko Bros</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-sm">Founded 2013</span>
              </div>

              <div className="space-y-6 text-foreground/70 text-lg font-light leading-relaxed mb-10">
                <p>
                  Brett Atkinson founded Atko Bros Landscaping in 2013 shortly after graduating high school, driven by a strong work ethic and a genuine passion for the industry. After gaining hands-on experience in both landscaping and construction, he recognized his desire to build something of his own — and started as an owner-operator with just one employee.
                </p>
                <p>
                  As the business grew, his brother Scott joined the team in 2016 following a sports injury that led him to leave college. Scott stepped into an operations manager role and has since earned his Connecticut state licenses in ornamental and turf applications for fertilizer and pesticides.
                </p>
                <p>
                  Today, Atko Bros Landscaping has expanded into a team of over 20 skilled employees who consistently demonstrate dedication, professionalism, and pride in their work every day.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-xl border border-black/8 h-full min-h-[500px]"
            >
              <img
                src="/about-lawn.jpg"
                alt="Perfectly striped lawn maintained by Atko Bros Landscaping"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
