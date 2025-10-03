import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Shield, Calendar, Plane, Briefcase, Headphones } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import Gallery from "@/components/Gallery";
import redMazdaSide from "@/assets/red-mazda-side.jpg";
import blueSuv from "@/assets/blue-suv.jpg";
import blackSuv from "@/assets/black-suv.jpg";
import redMazdaFront2 from "@/assets/red-mazda-front2.jpg";

const Home = () => {
  const features = [
    { icon: Calendar, title: "Daily & Weekly Rentals", description: "Flexible rental periods to suit your needs" },
    { icon: Plane, title: "Airport Transfers", description: "JKIA, Wilson & Moi International Airport" },
    { icon: Briefcase, title: "Business & Personal", description: "Perfect for corporate and leisure travel" },
    { icon: Shield, title: "Affordable & Reliable", description: "Quality vehicles at competitive rates" },
    { icon: Car, title: "Premium Fleet", description: "Well-maintained cars for every occasion" },
    { icon: Headphones, title: "24/7 Support", description: "Available anytime in Nairobi & Mombasa" },
  ];

  const popularCars = [
    { name: "Economy Class", image: redMazdaSide, price: "KSh 4,500/day", description: "Perfect for city drives" },
    { name: "SUV & Family", image: blueSuv, price: "KSh 7,500/day", description: "Spacious and comfortable" },
    { name: "Executive", image: blackSuv, price: "KSh 12,000/day", description: "Business class luxury" },
    { name: "Premium", image: redMazdaFront2, price: "KSh 6,000/day", description: "Style and comfort" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow Section */}
      <HeroSlideshow />

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

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonial Section */}
      <section className="py-20 bg-secondary/30">
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
