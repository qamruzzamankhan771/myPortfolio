import "../css/HeroSec.css";
import heroImage from "../assets/hero.png";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="small-text">Hi, I'm</div>
          <div className="big-text">Qamruzzaman Khan</div>
          <div className="medium-text">Software Engineer</div>
        </div>
      </div>
      <div className="hero-image">
      <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
}

export default HeroSection;
