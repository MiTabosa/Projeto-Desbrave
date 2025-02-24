import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>EXPLORE</h1>
        <h2>SUA HISTÓRIA</h2>
        <p>Aprenda, compartilhe e conecte-se com pessoas<br/>que buscam expandir seus horizontes.</p>
      </div>
      <img className="hero-image" src="./src/assets/imgPrincipal.png" />
    </section>
  );
};

export default HeroSection;
