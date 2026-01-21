import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";

const DealsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Exclusive Deals"
          subtitle="Don't miss out on our amazing deals and special offers!"
          badge="Special Offers"
        />
        <Deals />
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
