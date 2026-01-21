import { Sparkles } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-primary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer opacity-20" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          {badge && (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-primary-foreground font-semibold mb-8 border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              <span>{badge}</span>
            </div>
          )}
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary-foreground leading-tight drop-shadow-2xl">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {title.split(' ').map((word, index) => (
                <span key={index} className="inline-block mr-2">
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 max-w-3xl mx-auto font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {subtitle}
            </p>
          )}

          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-1 bg-white/50 rounded-full" />
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-12 h-1 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 600,50 900,80 C1050,95 1125,100 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default PageHeader;
