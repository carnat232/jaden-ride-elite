import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Services", path: "/services" },
    { name: "Book Now", path: "/booking" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-primary/95 backdrop-blur-lg shadow-luxury" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Jaden Car Rental Services" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-smooth"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-smooth ${
                  isActive(link.path)
                    ? "text-accent font-semibold"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254704848442" className="flex items-center space-x-2 text-primary-foreground hover:text-accent transition-smooth">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Us</span>
            </a>
            <a 
              href="https://wa.me/254704848442?text=Hello%20Jaden%20Car%20Rentals,%20I'd%20like%20to%20book%20a%20car."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-accent transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md transition-smooth ${
                    isActive(link.path)
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-primary-foreground hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <a 
                  href="https://wa.me/254704848442?text=Hello%20Jaden%20Car%20Rentals,%20I'd%20like%20to%20book%20a%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="hero" size="lg" className="w-full">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
