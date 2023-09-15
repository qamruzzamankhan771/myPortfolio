import '../css/AboutMeSection.css';

function AboutMeSection() {
  return (
    <section className="about-me-section">
      <div className="container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I discovered my love for coding during my school days, and it has been a lifelong adventure ever since. The allure of freelancing, with its freedom to work from anywhere and the absence of bosses or managers, beckoned me. My journey as a software developer has been driven by the goal of achieving true freedom while providing my skills to startups in need.
          </p>
        </div>
        <div className="core-values">
          <h3>Core Values</h3>
          <ul className="core-values-list">
            <li>Dedication to quality</li>
            <li>Strong problem-solving skills</li>
            <li>Adherence to industry best practices</li>
            <li>Flexibility in reviews and collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
