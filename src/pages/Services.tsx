import { Plane, Briefcase, Car, Heart, Calendar, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services at all major airports. Track your flight in real-time and enjoy seamless transfers with professional drivers.",
      features: ["Flight tracking", "Meet & greet", "24/7 availability", "Luggage assistance"],
    },
    {
      icon: Briefcase,
      title: "Corporate Rentals",
      description: "Professional transportation solutions for businesses. Impress clients and ensure executive comfort with our premium fleet and dedicated account management.",
      features: ["Volume discounts", "Priority booking", "Monthly billing", "Executive vehicles"],
    },
    {
      icon: Car,
      title: "Self-Drive & Chauffeur",
      description: "Choose your preferred driving experience. Drive yourself or relax with our professional, courteous chauffeurs who know the area inside out.",
      features: ["Flexible options", "Experienced drivers", "GPS navigation", "24/7 support"],
    },
    {
      icon: Heart,
      title: "Weddings & VIP Events",
      description: "Make your special day unforgettable with our luxury vehicles. From elegant sedans to stretch limousines, we provide the perfect ride for your celebration.",
      features: ["Luxury fleet", "Decorations available", "Professional service", "Package deals"],
    },
    {
      icon: Calendar,
      title: "Long-Term Leasing",
      description: "Cost-effective solutions for extended rentals. Whether you need a car for a month or a year, enjoy competitive rates and flexible terms.",
      features: ["Discounted rates", "Flexible terms", "Regular maintenance", "Easy swap options"],
    },
    {
      icon: Map,
      title: "City Tours & Travel",
      description: "Explore new destinations with confidence. Our well-maintained vehicles and optional tour guides ensure you make the most of your journey.",
      features: ["Tour packages", "Local expertise", "Customizable routes", "Group discounts"],
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
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book Now
              </Button>
            </Link>
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
