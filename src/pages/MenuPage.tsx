import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Our Menu"
          subtitle="Taste The Crunch - SAR 20–40 per person"
          badge="Delicious Selection"
        />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
