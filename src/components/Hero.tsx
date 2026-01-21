import heroChicken from "@/assets/hero-chicken.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroChicken}
          alt="Delicious Chicken with Cheese"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/65 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-medium mb-6">
            🍗 Premium Fried Chicken
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-gradient">Chicken</span>
            <br />
            <span className="text-foreground">Balalm</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Oozing with creamy cheese! Juicy, big portions of golden chicken with signature fountain cheese.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow group"
              onClick={() => window.open("https://hungerstation.com/sa-en/restaurant/riyadh/riyadh/146982", "_blank")}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 bg-background/80 backdrop-blur-sm"
              onClick={() => window.open("https://www.qrcodechimp.com/page/sk5k4c6c8qv6?v=chk1752757304", "_blank")}
            >
              View Menu
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="font-medium text-center sm:text-left">Open · Closes 4 AM</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="font-medium text-center sm:text-left">Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="font-medium text-center sm:text-left">+966 11 512 7373</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
