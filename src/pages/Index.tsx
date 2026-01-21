import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Deals from "@/components/Deals";
import MenuPreview from "@/components/MenuPreview";
import GalleryPreview from "@/components/GalleryPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Deals />
        <MenuPreview />
        <GalleryPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
