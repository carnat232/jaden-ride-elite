import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Jaden <span className="text-accent">Car Rental</span>
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Drive Your Journey With Ease. Premium car rentals in Nairobi & Mombasa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Daily Rentals</li>
              <li>Weekly Rentals</li>
              <li>Airport Transfers</li>
              <li>Corporate Rentals</li>
              <li>Business Travel</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent" />
                <span>0704848442 / 7</span>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <span>selitecarhirerentalservices@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Nairobi & Mombasa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jaden Car Rental Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
