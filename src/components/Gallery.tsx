import realimg1 from "@/assets/realimg1.png";
import realimg2 from "@/assets/realimg2.png";
import realimg3 from "@/assets/realimg3.png";
import realimg4 from "@/assets/realimg4.png";
import realimg5 from "@/assets/realimg5.png";
import realimg6 from "@/assets/realimg6.png";
import realimg7 from "@/assets/realimg7.png";

const galleryImages = [
  realimg1, realimg2, realimg3, realimg4, realimg5, realimg6, realimg7
];

const Gallery = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-visible border-2 border-border hover:border-primary/70 transition-all duration-500 card-hover group bg-card p-4 shadow-lg hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'scale-in 0.6s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-contain relative z-10"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12">
            <h3 className="text-4xl font-bold mb-6 text-center">Share Your Moments</h3>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Love our food? Tag us on social media with #ChickenBalalm and share your delicious moments with us!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">4.8★</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
