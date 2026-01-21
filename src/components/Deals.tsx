import { Link, useLocation } from "react-router-dom";
import deal1 from "@/assets/deal1.png";
import deal2 from "@/assets/deal2.png";
import deal3 from "@/assets/deal3.png";
import deal4 from "@/assets/deal4.png";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const deals = [
  { image: deal1, name: "Deal 1" },
  { image: deal2, name: "Deal 2" },
  { image: deal3, name: "Deal 3" },
  { image: deal4, name: "Deal 4" },
];

const Deals = () => {
  const location = useLocation();
  const isDealsPage = location.pathname === "/deals";

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-6 py-3 bg-gradient-primary/20 rounded-full text-primary font-semibold mb-6 border border-primary/30 shadow-lg">
            Special Offers
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Exclusive <span className="text-gradient">Deals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Don't miss out on our amazing deals and special offers!
          </p>
        </div>

        {/* First image separately */}
        <div className="mb-6 max-w-md mx-auto">
          <div
            className="relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card shadow-lg hover:shadow-xl"
            style={{
              animation: 'scale-in 0.6s ease-out forwards',
              aspectRatio: '2/3',
              minHeight: '500px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10 pointer-events-none" />
            <div className="absolute top-2 right-2 bg-gradient-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-0 group-hover:scale-100 z-20">
              Deal
            </div>
            <img
              src={deals[0].image}
              alt={deals[0].name}
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
          </div>
        </div>

        {/* Remaining images - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {deals.slice(1).map((deal, index) => (
            <div
              key={index + 1}
              className="relative rounded-xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card shadow-lg hover:shadow-xl"
              style={{
                animationDelay: `${(index + 1) * 0.1}s`,
                animation: 'scale-in 0.6s ease-out forwards',
                aspectRatio: '3/4'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10 pointer-events-none" />
              <div className="absolute top-2 right-2 bg-gradient-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-0 group-hover:scale-100 z-20">
                Deal
              </div>
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl" />
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 group animate-pulse-glow"
            onClick={() => window.open("https://hungerstation.com/sa-en/restaurant/riyadh/riyadh/146982", "_blank")}
          >
            Order Now
            <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          {!isDealsPage && (
            <Link to="/deals">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View All Deals
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>

        {/* Additional Deals Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12">
            <h3 className="text-4xl font-bold mb-6 text-center">Why Our Deals Are Special</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="font-bold text-lg mb-2">Best Value</h4>
                <p className="text-sm text-muted-foreground">
                  Get more for your money with our exclusive combo deals
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎁</div>
                <h4 className="font-bold text-lg mb-2">Free Add-ons</h4>
                <p className="text-sm text-muted-foreground">
                  Enjoy free cheese fountain and extra sauces with select deals
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-lg mb-2">Limited Time</h4>
                <p className="text-sm text-muted-foreground">
                  Don't miss out on these special offers - available for a limited time only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
