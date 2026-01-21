import cheeseFountain from "@/assets/cheese-fountain.jpg";
import { Sparkles, Flame, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Fountain Cheese",
    description: "Free with our 12 pcs family deal! Kids will love it.",
  },
  {
    icon: Flame,
    title: "Juicy & Crispy",
    description: "Big sizes of perfectly seasoned fried chicken.",
  },
  {
    icon: Heart,
    title: "100% Halal",
    description: "Premium halal ingredients for your peace of mind.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "High chairs, kids' menu, and fun atmosphere.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden glow-effect">
              <img
                src={cheeseFountain}
                alt="Cheese Fountain"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold text-foreground">
                  Experience Our Famous
                </p>
                <p className="text-3xl font-bold text-gradient">
                  Cheese Fountain
                </p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
              <p className="text-sm text-muted-foreground">Special Deal</p>
              <p className="text-2xl font-bold text-gradient">75 SAR</p>
              <p className="text-xs text-muted-foreground">Family Pack</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <span className="inline-block px-6 py-3 bg-gradient-primary/20 rounded-full text-primary font-semibold mb-6 border border-primary/30 shadow-lg">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              More Than Just
              <br />
              <span className="text-gradient">Fried Chicken</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-md">
              Affordable and highly recommended! We serve the crispiest chicken
              with our signature oozing cheese fountain experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slide-up 0.6s ease-out forwards'
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Our Story</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chicken Balalm started with a simple mission: serve the crispiest, juiciest fried chicken in Riyadh.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl border-2 border-border p-8">
                <h4 className="text-2xl font-bold mb-4">Quality First</h4>
                <p className="text-muted-foreground">
                  We use only the finest halal ingredients, ensuring every bite is fresh, flavorful, and made with care. 
                  Our secret recipe has been perfected over years to deliver that perfect crunch.
                </p>
              </div>
              <div className="bg-card rounded-2xl border-2 border-border p-8">
                <h4 className="text-2xl font-bold mb-4">Community Love</h4>
                <p className="text-muted-foreground">
                  Located in the heart of Riyadh, we've become a favorite spot for families, friends, and food lovers. 
                  Our commitment to quality and service keeps our community coming back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
