import { useState } from "react";
import { X } from "lucide-react";
import redMazdaFront from "@/assets/red-mazda-front.jpg";
import redMazdaSide from "@/assets/red-mazda-side.jpg";
import redMazdaFront2 from "@/assets/red-mazda-front2.jpg";
import blueSuv from "@/assets/blue-suv.jpg";
import blackSuv from "@/assets/black-suv.jpg";
import carInterior from "@/assets/gallery/car-interior.jpg";
import blackSuvRear from "@/assets/gallery/black-suv-rear.jpg";
import blackSuvFront from "@/assets/gallery/black-suv-front.jpg";
import blackSuvSide from "@/assets/gallery/black-suv-side.jpg";
import blackSuvMural from "@/assets/gallery/black-suv-mural.jpg";
import whiteSedan from "@/assets/gallery/white-sedan.jpg";
import whiteSedanFront from "@/assets/gallery/white-sedan-front.jpg";
import redCx5 from "@/assets/gallery/red-cx5.jpg";
import redCx5Front from "@/assets/gallery/red-cx5-front.jpg";
import redCx5Side2 from "@/assets/gallery/red-cx5-side2.jpg";
import mazdaEngine from "@/assets/gallery/mazda-engine.jpg";
import whiteCx5Front from "@/assets/gallery/white-cx5-front.jpg";
import whiteCx5Front2 from "@/assets/gallery/white-cx5-front2.jpg";
import whiteCx5Interior from "@/assets/gallery/white-cx5-interior.jpg";
import whiteCx5Rear from "@/assets/gallery/white-cx5-rear.jpg";
import mazdaCx5Interior2 from "@/assets/gallery/mazda-cx5-interior2.jpg";
import blueMazda6 from "@/assets/gallery/blue-mazda6.jpg";
import blueMazda6Angle from "@/assets/gallery/blue-mazda6-angle.jpg";
import blueMazda6Side from "@/assets/gallery/blue-mazda6-side.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: redMazdaFront, alt: "Red Mazda Demio Front View", category: "Economy" },
    { src: redMazdaSide, alt: "Red Mazda Demio Side View", category: "Economy" },
    { src: redMazdaFront2, alt: "Red Mazda 2 Exterior", category: "Economy" },
    { src: blueSuv, alt: "Blue Honda HR-V", category: "SUV" },
    { src: blackSuv, alt: "Black Honda Vezel", category: "SUV" },
    { src: blackSuvFront, alt: "Black Honda HR-V Front", category: "SUV" },
    { src: blackSuvRear, alt: "Black Honda HR-V Rear", category: "SUV" },
    { src: blackSuvSide, alt: "Black Honda HR-V Side", category: "SUV" },
    { src: blackSuvMural, alt: "Black Honda HR-V Scenic", category: "SUV" },
    { src: whiteCx5Front, alt: "White Mazda CX-5 Front", category: "Premium" },
    { src: whiteCx5Front2, alt: "White Mazda CX-5 Angle", category: "Premium" },
    { src: whiteCx5Rear, alt: "White Mazda CX-5 Rear", category: "Premium" },
    { src: redCx5, alt: "Red Mazda CX-5 Rear View", category: "Premium" },
    { src: redCx5Front, alt: "Red Mazda CX-5 Front View", category: "Premium" },
    { src: redCx5Side2, alt: "Red Mazda CX-5 Side View", category: "Premium" },
    { src: blueMazda6, alt: "Blue Mazda 6 Sedan", category: "Executive" },
    { src: blueMazda6Angle, alt: "Blue Mazda 6 Angle View", category: "Executive" },
    { src: blueMazda6Side, alt: "Blue Mazda 6 Side View", category: "Executive" },
    { src: whiteSedan, alt: "White Executive Sedan Beach", category: "Executive" },
    { src: whiteSedanFront, alt: "White Executive Sedan Front", category: "Executive" },
    { src: carInterior, alt: "Premium Honda Interior", category: "Interior" },
    { src: whiteCx5Interior, alt: "White CX-5 Interior Seats", category: "Interior" },
    { src: mazdaCx5Interior2, alt: "Mazda CX-5 Dashboard", category: "Interior" },
    { src: mazdaEngine, alt: "Well-Maintained Engine Bay", category: "Quality" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our premium fleet - {galleryImages.length} stunning photos showcasing well-maintained vehicles ready for your journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-card hover-lift cursor-pointer animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-semibold text-accent-foreground mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-smooth p-2 rounded-full bg-white/10 backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-luxury"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
