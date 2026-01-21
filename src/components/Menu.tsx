import chickenBucket from "@/assets/chicken-bucket.jpg";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import menu1 from "@/assets/menu1.png";
import menu2 from "@/assets/menu2.png";
import menu3 from "@/assets/menu3.png";
import menu4 from "@/assets/menu4.png";
import menu5 from "@/assets/menu5.png";
import menu6 from "@/assets/menu6.png";
import menu7 from "@/assets/menu7.png";
import menu8 from "@/assets/menu8.png";
import menu9 from "@/assets/menu9.png";
import menu10 from "@/assets/menu10.png";
import menu11 from "@/assets/menu11.png";
import menu12 from "@/assets/menu12.png";
import menu13 from "@/assets/menu13.png";
import menu14 from "@/assets/menu14.png";
import menu15 from "@/assets/menu15.png";
import menu16 from "@/assets/menu16.png";
import menu17 from "@/assets/menu17.png";
import menu18 from "@/assets/menu18.png";
import menu19 from "@/assets/menu19.png";
import menu20 from "@/assets/menu20.png";

const menuImages = [
  menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10,
  menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19, menu20
];

const menuItems = [
  {
    name: "Family Deal",
    description: "12 pcs chicken, 3 Pepsi, 3 coleslaw, 3 garlic sauce, kubos, fries, grilled corn + FREE fountain cheese",
    price: "75",
    badge: "Best Seller",
  },
  {
    name: "Bucket Meal",
    description: "6 pcs crispy chicken with fries and coleslaw",
    price: "45",
  },
  {
    name: "Solo Meal",
    description: "3 pcs chicken, fries, drink, and garlic sauce",
    price: "25",
  },
  {
    name: "Kids Meal",
    description: "2 pcs chicken tenders, fries, and juice",
    price: "20",
  },
];

const Menu = () => {
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
            Our Menu
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Taste The <span className="text-gradient">Crunch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            SAR 20–40 per person. Affordable, delicious, and always fresh!
          </p>
        </div>

        {/* First 2 images in one card */}
        <div className="mb-6">
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card p-4 shadow-lg hover:shadow-2xl"
            style={{
              animation: 'scale-in 0.6s ease-out forwards'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 pointer-events-none" />
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <img
                src={menuImages[0]}
                alt="Menu item 1"
                className="w-full h-auto block"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
              <img
                src={menuImages[1]}
                alt="Menu item 2"
                className="w-full h-auto block"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
          </div>
        </div>

        {/* Images 3-19 - 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {menuImages.slice(2, 19).map((image, index) => (
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

        {/* Last image separately */}
        <div className="mb-12">
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card shadow-lg hover:shadow-2xl max-w-md mx-auto"
            style={{
              animationDelay: `${19 * 0.05}s`,
              animation: 'scale-in 0.6s ease-out forwards'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 pointer-events-none" />
            <img
              src={menuImages[19]}
              alt="Menu item 20"
              className="w-full h-auto block relative"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    {item.badge && (
                      <span className="px-2 py-1 bg-gradient-primary text-primary-foreground text-xs font-medium rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gradient">{item.price}</p>
                  <p className="text-xs text-muted-foreground">SAR</p>
                </div>
              </div>
            ))}

            <Button
              variant="default"
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold mt-6 px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={() => window.open("https://www.qrcodechimp.com/page/sk5k4c6c8qv6?v=chk1752757304", "_blank")}
            >
              View Full Menu
              <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden glow-effect">
              <img
                src={chickenBucket}
                alt="Chicken Bucket"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Price Tag */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-primary rounded-2xl p-6 shadow-lg">
              <p className="text-sm text-primary-foreground/80">Starting from</p>
              <p className="text-4xl font-bold text-primary-foreground">20 SAR</p>
            </div>
          </div>
        </div>

        {/* Additional Menu Info Section */}
        <div className="mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12">
              <h3 className="text-4xl font-bold mb-6 text-center">Menu Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Popular Choices</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Family Deal - Perfect for sharing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Bucket Meal - Great value</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Solo Meal - Quick & satisfying</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Kids Meal - Fun for little ones</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4">What's Special</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Free cheese fountain with family deals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Fresh ingredients daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Customizable spice levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Halal certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
