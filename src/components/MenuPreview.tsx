import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu3 from "@/assets/menu3.png";
import menu4 from "@/assets/menu4.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";

const previewMenuImages = [menu1, menu2, menu3, menu4, menu5, menu6];

const MenuPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-primary/20 rounded-full text-primary font-semibold mb-6 border border-primary/30 shadow-lg">
            Our Menu
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Taste The <span className="text-gradient">Crunch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            SAR 20–40 per person. Affordable, delicious, and always fresh!
          </p>
        </div>

        {/* First 2 images in one card - 1 row, small size */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card p-3 shadow-lg hover:shadow-2xl"
            style={{
              animation: 'scale-in 0.6s ease-out forwards'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 pointer-events-none" />
            <div className="grid grid-cols-2 gap-2 relative z-10">
              <img
                src={previewMenuImages[0]}
                alt="Menu item 1"
                className="w-full h-auto block"
                style={{ display: 'block', width: '100%', height: 'auto', maxHeight: '200px' }}
              />
              <img
                src={previewMenuImages[1]}
                alt="Menu item 2"
                className="w-full h-auto block"
                style={{ display: 'block', width: '100%', height: 'auto', maxHeight: '200px' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
          </div>
        </div>

        {/* Remaining images - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewMenuImages.slice(2).map((image, index) => (
            <div
              key={index + 2}
              className="relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card shadow-lg hover:shadow-2xl"
              style={{
                animationDelay: `${(index + 2) * 0.05}s`,
                animation: 'scale-in 0.6s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 pointer-events-none" />
              <img
                src={image}
                alt={`Menu item ${index + 3}`}
                className="w-full h-auto block relative"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
