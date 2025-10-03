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
import mazdaEngine from "@/assets/gallery/mazda-engine.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: redMazdaFront, alt: "Red Mazda Front View", category: "Economy" },
    { src: redMazdaSide, alt: "Red Mazda Side View", category: "Economy" },
    { src: redMazdaFront2, alt: "Red Mazda Exterior", category: "Economy" },
    { src: blueSuv, alt: "Blue SUV", category: "SUV" },
    { src: blackSuv, alt: "Black SUV", category: "SUV" },
    { src: blackSuvFront, alt: "Black Honda HR-V Front", category: "SUV" },
    { src: blackSuvRear, alt: "Black Honda HR-V Rear", category: "SUV" },
    { src: blackSuvSide, alt: "Black Honda HR-V Side", category: "SUV" },
    { src: blackSuvMural, alt: "Black Honda HR-V", category: "SUV" },
    { src: whiteSedan, alt: "White Sedan Beach View", category: "Executive" },
    { src: whiteSedanFront, alt: "White Sedan Front", category: "Executive" },
    { src: redCx5, alt: "Red Mazda CX-5 Rear", category: "Premium" },
    { src: redCx5Front, alt: "Red Mazda CX-5 Front", category: "Premium" },
    { src: carInterior, alt: "Premium Car Interior", category: "Interior" },
    { src: mazdaEngine, alt: "Well-Maintained Engine", category: "Quality" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our premium fleet - well-maintained vehicles ready for your journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
