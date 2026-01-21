import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import realimg1 from "@/assets/realimg1.png";
import realimg2 from "@/assets/realimg2.png";
import realimg3 from "@/assets/realimg3.png";
import realimg4 from "@/assets/realimg4.png";

const previewGalleryImages = [realimg1, realimg2, realimg3, realimg4];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-primary/20 rounded-full text-primary font-semibold mb-6 border border-primary/30 shadow-lg">
            Gallery
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Real <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            See our delicious food and happy customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Array.from({ length: Math.ceil(previewGalleryImages.length / 2) }).map((_, cardIndex) => {
            const startIndex = cardIndex * 2;
            const imagesInCard = previewGalleryImages.slice(startIndex, startIndex + 2);
            
            return (
              <div
                key={cardIndex}
                className="relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card p-4 shadow-lg hover:shadow-xl"
                style={{
                  animationDelay: `${cardIndex * 0.15}s`,
                  animation: 'scale-in 0.6s ease-out forwards'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {imagesInCard.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={image}
                        alt={`Gallery image ${startIndex + imgIndex + 1}`}
                        className="w-full h-auto object-contain"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
