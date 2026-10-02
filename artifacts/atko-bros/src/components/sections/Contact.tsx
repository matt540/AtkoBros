import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

export function Contact() {
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
    <section id="contact" className="pt-10 pb-24 md:pb-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Get In Touch</span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Request a <span className="italic green-gradient-text">Consultation</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Info Side */}
            <div className="lg:col-span-2 bg-primary p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Contact Information</h3>
                <p className="text-white/70 text-sm mb-10 leading-relaxed">
                  Based in Greenwich, CT — proudly serving all of Southern Connecticut's finest properties.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Phone</p>
                      <a href="tel:2032531089" className="text-white font-medium hover:text-white/80 transition-colors">(203) 253-1089</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:atkobroslandscaping@gmail.com" className="text-white font-medium hover:text-white/80 transition-colors text-sm">atkobroslandscaping@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Your Name</label>
                    <Input placeholder="John Smith" {...register("name")} />
                    {errors.name && <p className="text-destructive text-xs mt-2">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Email Address</label>
                    <Input placeholder="john@example.com" type="email" {...register("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-2">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Phone Number</label>
                    <Input placeholder="(203) 555-0000" type="tel" {...register("phone")} />
                    {errors.phone && <p className="text-destructive text-xs mt-2">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Service Interested In</label>
                    <select
                      {...register("service")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all duration-200"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="maintenance">Estate Maintenance</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="tree-shrub">Tree & Shrub Care</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="lighting">Outdoor Lighting</option>
                      <option value="snow">Snow & Ice Management</option>
                      <option value="firewood">Firewood Delivery</option>
                      <option value="chimney">Chimney Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-2">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Tell Us About Your Project</label>
                  <Textarea placeholder="Describe your property and what you'd like to achieve..." {...register("message")} className="min-h-[120px]" />
                  {errors.message && <p className="text-destructive text-xs mt-2">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
                  {isPending ? "Sending..." : "Submit Request — Free Consultation"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
