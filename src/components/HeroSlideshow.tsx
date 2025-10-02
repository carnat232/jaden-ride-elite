import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroSlide1,
      title: "Rent the Car You Want.",
      subtitle: "Anytime. Anywhere.",
      description: "Affordable. Executive. Reliable – Jaden Car Rental Services.",
    },
    {
      image: heroSlide2,
      title: "Luxury Meets Comfort",
      subtitle: "Premium Fleet Selection",
      description: "Experience excellence with our range of luxury vehicles.",
    },
    {
      image: heroSlide3,
      title: "Your Journey, Your Way",
      subtitle: "Self-Drive or Chauffeur",
      description: "Flexible options to match your lifestyle and preferences.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div
          key={currentSlide}
          className="animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {slides[currentSlide].title}
            <br />
            <span className="text-accent">{slides[currentSlide].subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          {/* Glassmorphism Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button variant="hero" size="xl" className="backdrop-blur-sm">
                Book a Ride
              </Button>
            </Link>
            <Link to="/fleet">
              <Button 
                variant="glass" 
                size="xl"
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20"
              >
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full p-3 transition-smooth group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-smooth" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full p-3 transition-smooth group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-smooth" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-3 bg-accent rounded-full"
                : "w-3 h-3 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
