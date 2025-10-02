import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, Award, MapPin, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import economyCar from "@/assets/economy-car.jpg";
import suvCar from "@/assets/suv-car.jpg";
import executiveCar from "@/assets/executive-car.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";

const Home = () => {
  const features = [
    { icon: MapPin, title: "Airport Pickups", description: "Fast & reliable airport transfer services" },
    { icon: Car, title: "Chauffeur & Self-Drive", description: "Choose your preferred driving option" },
    { icon: Clock, title: "Flexible Plans", description: "Daily, weekly, or monthly rental options" },
    { icon: Shield, title: "Insured Vehicles", description: "All cars are fully insured for your safety" },
    { icon: Award, title: "Premium Fleet", description: "Luxury and budget-friendly options available" },
    { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer assistance" },
  ];

  const popularCars = [
    { name: "Economy Class", image: economyCar, price: "$45/day", description: "Perfect for city drives" },
    { name: "SUV & Family", image: suvCar, price: "$75/day", description: "Spacious and comfortable" },
    { name: "Executive", image: executiveCar, price: "$120/day", description: "Business class luxury" },
    { name: "Premium Luxury", image: luxuryCar, price: "$200/day", description: "Ultimate comfort" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury car" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Rent the Car You Want.
            <br />
            <span className="text-accent">Anytime. Anywhere.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Affordable. Executive. Reliable – Jaden Car Rental Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book a Ride
              </Button>
            </Link>
            <Link to="/fleet">
              <Button variant="glass" size="xl">
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience excellence in every journey with our premium car rental services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cars Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Picks</h2>
            <p className="text-muted-foreground text-lg">
              Explore our most-rented vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover hover-scale" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{car.price}</span>
                    <Link to="/fleet">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/fleet">
              <Button variant="default" size="lg">
                View Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-3xl">★</span>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 text-foreground">
              "Rated ★★★★★ by travelers and businesses"
            </blockquote>
            <p className="text-muted-foreground text-lg">
              Trusted by thousands of satisfied customers for premium car rental experiences
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Need a car today?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 animate-fade-in">
            Book in minutes and hit the road
          </p>
          <Link to="/booking">
            <Button variant="hero" size="xl" className="animate-scale-in">
              Book Your Ride Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
