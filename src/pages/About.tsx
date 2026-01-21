import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="About Us"
          subtitle="More Than Just Fried Chicken"
          badge="Why Choose Us"
        />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default About;
