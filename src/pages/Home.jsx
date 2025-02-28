import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import CardsSection from "../components/Card/CardsSection";
import MapSection from "../components/MapSection/MapSection";
import Footer from "../components/Footer/Footer";
import CardsLocais from "../components/Card/CardsLocais";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsSection />
      <MapSection />
      <CardsLocais />
      <Footer />
    </>
  );
};

export default Home;
