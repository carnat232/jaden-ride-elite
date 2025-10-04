import { Plane, Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Daily Rentals",
      description: "Perfect for short trips and errands. Rent a reliable vehicle for a day and enjoy the freedom to explore Nairobi and Mombasa at your own pace.",
      features: ["Flexible hours", "Multiple vehicle options", "Easy booking", "Affordable rates"],
    },
    {
      icon: Calendar,
      title: "Weekly Rentals",
      description: "Extended stays made easy. Get better rates with our weekly rental packages, ideal for business trips or extended vacations in Kenya.",
      features: ["Discounted weekly rates", "Flexible pickup/return", "Well-maintained fleet", "24/7 support"],
    },
    {
      icon: Briefcase,
      title: "Business / Corporate Use",
      description: "Professional transportation solutions for businesses. Impress clients and ensure executive comfort with our premium fleet and dedicated corporate services.",
      features: ["Corporate accounts", "Priority booking", "Executive vehicles", "Monthly billing"],
    },
    {
      icon: Plane,
      title: "Airport Transfers for Travellers",
      description: "Seamless airport transfers in Nairobi and Mombasa. We ensure timely pickups and drop-offs at JKIA, Wilson Airport, and Moi International Airport.",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "Punctual service"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive car rental solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Why Our Services Stand Out</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We go beyond just renting cars – we provide complete transportation solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-muted-foreground">Round-the-clock availability and support</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Customer satisfaction guarantee</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Vehicles in our premium fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Service?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book now and discover why thousands trust Jaden Car Rental Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254704848442?text=Hello%20Jaden%20Car%20Rentals,%20I'd%20like%20to%20book%20a%20car."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl">
                Book Now
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
