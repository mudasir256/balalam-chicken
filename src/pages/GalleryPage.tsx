import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Gallery"
          subtitle="Real Moments from Our Restaurant"
          badge="See Our Food"
        />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
