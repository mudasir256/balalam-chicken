import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Order?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the best fried chicken in Riyadh. Order now for delivery or visit us in person!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-semibold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow"
              onClick={() => window.open("https://hungerstation.com/sa-en/restaurant/riyadh/riyadh/146982", "_blank")}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Visit Us
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Open · Closes 4 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+966 11 512 7373</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
