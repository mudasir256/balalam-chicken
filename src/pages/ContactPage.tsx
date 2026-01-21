import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Us"
          subtitle="Come Hungry - Find us in the heart of Riyadh"
          badge="Visit Us"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
