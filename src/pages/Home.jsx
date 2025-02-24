import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import CardsSection from "../components/Card/CardsSection";
import MapSection from "../components/MapSection/MapSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardsSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;
