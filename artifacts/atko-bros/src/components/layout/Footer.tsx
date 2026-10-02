import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="group flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Atko Bros Landscaping"
                className="h-16 w-16 object-contain filter invert"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-wider uppercase text-white">
                  Atko Bros
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">
                  Landscaping
                </span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Elevating Fairfield & Westchester counties most prestigious properties through uncompromising craftsmanship and exceptional landscape design.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/atkobros/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-white/60">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/atkobroslandscaping" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-white/60">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Firewood", href: "/firewood" },
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/70"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Premium Services</h4>
            <ul className="flex flex-col gap-3">
              {["Landscape Design", "Lawn Maintenance", "Hardscaping", "Tree & Shrub Care", "Firewood Delivery", "Chimney Services"].map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/70"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Get in Touch</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Greenwich, CT 06830<br />Serving Southern CT & Southern NY</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:2032531089" className="hover:text-white transition-colors">(203) 253-1089</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:atkobroslandscaping@gmail.com" className="hover:text-white transition-colors">atkobroslandscaping@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Atko Bros Landscaping. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
