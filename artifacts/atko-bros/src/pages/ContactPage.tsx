import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceArea } from "@/components/sections/ServiceArea";


export default function ContactPage() {
  const { toast } = useToast();
  const { mutate: submitContact, isPending } = useSubmitContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thank you. We will be in touch shortly.",
        });
        reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try calling us instead.",
        });
      }
    });
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end pb-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/contact-hero.jpg" alt="Atko Bros team at work" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-white/60" />
              <span className="text-white/80 font-medium tracking-widest uppercase text-sm">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Contact <span className="italic">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">We'd Love to Hear From You</span>
              <div className="h-[1px] w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Start Your <span className="italic green-gradient-text">Project</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden border border-black/8 shadow-lg">

            {/* Info panel */}
            <div className="lg:col-span-2 bg-foreground p-10 md:p-12 flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-serif text-white mb-3">Contact Details</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Reach out by phone, email, or fill out the form and we'll get back to you promptly.
                </p>
              </div>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:2032531089" className="text-white font-medium hover:text-primary transition-colors">(203) 253-1089</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:atkobroslandscaping@gmail.com" className="text-white font-medium hover:text-primary transition-colors text-sm">atkobroslandscaping@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-white font-medium text-sm">Fairfield County, CT &amp; Westchester County, NY</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Full Name</label>
                    <Input placeholder="Jane Smith" {...register("name")} />
                    {errors.name && <p className="text-destructive text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Email</label>
                    <Input placeholder="jane@example.com" type="email" {...register("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Phone</label>
                    <Input placeholder="(203) 555-0000" type="tel" {...register("phone")} />
                    {errors.phone && <p className="text-destructive text-xs mt-2">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Service Needed</label>
                    <select
                      {...register("service")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all duration-200"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="maintenance">Estate Maintenance</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="tree-shrub">Tree &amp; Shrub Care</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="lighting">Outdoor Lighting</option>
                      <option value="snow">Snow &amp; Ice Management</option>
                      <option value="firewood">Firewood Delivery</option>
                      <option value="chimney">Chimney Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-2">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">How Can We Help?</label>
                  <Textarea placeholder="Tell us about your property and what you're looking to accomplish..." {...register("message")} className="min-h-[140px]" />
                  {errors.message && <p className="text-destructive text-xs mt-2">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto px-10" disabled={isPending}>
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area */}
      <ServiceArea />

      <Footer />
    </main>
  );
}
