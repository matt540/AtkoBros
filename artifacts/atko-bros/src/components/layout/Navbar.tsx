import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Firewood", href: "/firewood" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // On non-home pages always show the glass nav
    if (!isHome) setIsScrolled(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrolled = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-2" : "bg-white/0 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="/" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Atko Bros Landscaping"
            className="h-20 w-20 object-contain"
          />
          <div className={`flex flex-col items-center leading-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white drop-shadow"}`}>
            <span className="text-2xl font-bold tracking-widest uppercase">Atko Bros</span>
            <span className="text-sm font-medium tracking-[0.25em] uppercase opacity-75">Landscaping</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    scrolled ? "text-foreground/80" : "text-white drop-shadow"
                  } ${location === link.href ? "text-primary" : ""}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={`flex items-center gap-4 border-l pl-6 ${scrolled ? "border-black/10" : "border-white/20"}`}>
            <a
              href="tel:2032531089"
              className={`flex items-center gap-2 text-base font-medium hover:text-primary transition-colors ${
                scrolled ? "text-foreground/90" : "text-white drop-shadow"
              }`}
            >
              <Phone className="w-4 h-4 text-primary" />
              (203) 253-1089
            </a>
            <Button asChild size="sm">
              <a href="/contact">Get a Quote</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-3 px-4 text-base font-medium text-foreground rounded hover:bg-secondary hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-black/10 flex flex-col gap-4">
            <a href="tel:2032531089" className="flex items-center gap-3 py-2 px-4 text-foreground hover:text-primary">
              <Phone className="w-5 h-5 text-primary" />
              (203) 253-1089
            </a>
            <Button asChild className="w-full">
              <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Free Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
