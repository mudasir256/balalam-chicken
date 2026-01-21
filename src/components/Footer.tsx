import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Deals", href: "/deals" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t-2 border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Chicken Balalm Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Chicken</span> Balalm
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Serving the crispiest, juiciest fried chicken in Riyadh. Oozing with cheese and flavor!
            </p>
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.instagram.com/chickenbalalm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578416019268"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@chickenbalalm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Location</p>
                  <p>Prince Muhammad Ibn Abd Al Aziz</p>
                  <p>As Sulimaniyah, Riyadh 12211</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+966 11 512 7373</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Hours</p>
                  <p>Always Open · Closes 4 AM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Order Now Section */}
          <div>
            <h4 className="text-lg font-bold mb-6">Order Now</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Get your favorite fried chicken delivered right to your door!
            </p>
            <a
              href="https://hungerstation.com/sa-en/restaurant/riyadh/riyadh/146982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Order Delivery
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Chicken Balalm. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/contact" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
