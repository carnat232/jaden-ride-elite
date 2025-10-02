import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Settings, Check } from "lucide-react";
import economyCar from "@/assets/economy-car.jpg";
import suvCar from "@/assets/suv-car.jpg";
import executiveCar from "@/assets/executive-car.jpg";
import luxuryCar from "@/assets/luxury-car.jpg";

const Fleet = () => {
  const fleetCategories = [
    {
      category: "Economy Cars",
      description: "Perfect for daily commutes and city driving",
      cars: [
        {
          name: "Toyota Corolla",
          image: economyCar,
          price: "$45",
          features: ["5 Seats", "Auto", "AC", "Bluetooth"],
        },
        {
          name: "Kia Rio",
          image: economyCar,
          price: "$40",
          features: ["5 Seats", "Manual", "AC", "GPS"],
        },
        {
          name: "Honda Civic",
          image: economyCar,
          price: "$50",
          features: ["5 Seats", "Auto", "AC", "Premium Audio"],
        },
      ],
    },
    {
      category: "SUVs & Family",
      description: "Spacious and comfortable for family trips",
      cars: [
        {
          name: "Toyota RAV4",
          image: suvCar,
          price: "$75",
          features: ["7 Seats", "Auto", "4WD", "Smart Key"],
        },
        {
          name: "Honda CR-V",
          image: suvCar,
          price: "$70",
          features: ["5 Seats", "Auto", "AWD", "Panoramic Roof"],
        },
        {
          name: "Toyota Highlander",
          image: suvCar,
          price: "$85",
          features: ["8 Seats", "Auto", "4WD", "Leather Seats"],
        },
      ],
    },
    {
      category: "Executive & Business Class",
      description: "Professional elegance for corporate needs",
      cars: [
        {
          name: "Mercedes C300",
          image: executiveCar,
          price: "$120",
          features: ["5 Seats", "Auto", "Premium", "Massage Seats"],
        },
        {
          name: "BMW 5 Series",
          image: executiveCar,
          price: "$130",
          features: ["5 Seats", "Auto", "Luxury", "Advanced Tech"],
        },
        {
          name: "Audi A6",
          image: executiveCar,
          price: "$125",
          features: ["5 Seats", "Auto", "Premium", "Virtual Cockpit"],
        },
      ],
    },
    {
      category: "Luxury & Events",
      description: "Ultimate luxury for special occasions",
      cars: [
        {
          name: "Range Rover",
          image: luxuryCar,
          price: "$200",
          features: ["5 Seats", "Auto", "4WD", "Ultimate Luxury"],
        },
        {
          name: "Mercedes G-Wagon",
          image: luxuryCar,
          price: "$250",
          features: ["5 Seats", "Auto", "4WD", "Premium Plus"],
        },
        {
          name: "Lexus LX",
          image: luxuryCar,
          price: "$220",
          features: ["7 Seats", "Auto", "4WD", "Presidential"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            From economy to luxury, find the perfect vehicle for your journey
          </p>
        </div>
      </section>

      {/* Fleet Categories */}
      {fleetCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary/20"}`}
        >
          <div className="container mx-auto px-4">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{category.category}</h2>
              <p className="text-muted-foreground text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.cars.map((car, carIndex) => (
                <div
                  key={carIndex}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${carIndex * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover hover-scale"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{car.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {car.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">Starting at</span>
                        <div className="text-3xl font-bold text-accent">{car.price}<span className="text-lg">/day</span></div>
                      </div>
                      <Link to="/booking">
                        <Button variant="default">
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us for custom requirements and special requests
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
