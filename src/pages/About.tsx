import { Shield, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All vehicles are regularly inspected, fully insured, and maintained to the highest standards.",
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Our chauffeurs are experienced, courteous, and trained to provide exceptional service.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick inquiry responses and efficient booking process to get you on the road faster.",
    },
    {
      icon: Award,
      title: "Competitive Rates",
      description: "Premium quality at affordable prices with transparent pricing and no hidden fees.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "5000+", label: "Happy Customers" },
    { number: "500+", label: "Vehicles Available" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Drive Your Journey With Ease
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Jaden Car Rental Services is your trusted partner for premium car rentals and airport transfers in Nairobi and Mombasa. We provide reliable, affordable, and comfortable transportation solutions for both personal and business travel.
              </p>
              <p>
                With locations in Nairobi (Bee Center Umoja Phase 2) and Mombasa (Bamburi), we're strategically positioned to serve travelers throughout Kenya. Whether you need a car for a day, a week, or airport pickup, we've got you covered.
              </p>
              <p>
                Our mission is simple: to make every journey smooth, convenient, and memorable. We focus on customer satisfaction, reliability, and providing vehicles that meet the highest standards of comfort and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To provide exceptional car rental experiences that exceed expectations through
              quality vehicles, professional service, and unwavering commitment to customer
              satisfaction.
            </p>
            <div className="bg-accent/5 p-8 rounded-xl">
              <p className="text-lg italic text-foreground">
                "We don't just rent cars – we create memorable journeys and build lasting
                relationships with our customers. Every mile matters, and every customer is family."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Jaden Car Rental Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book Your Car
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="glass" size="xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
