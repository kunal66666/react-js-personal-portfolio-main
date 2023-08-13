export default function HeroSection() {
  const handleDownloadClick = () => {
    window.open('./img/Kunalkashyap_resume.pdf');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kunal</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I love to build applications, adding functionalities, making things awesome.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownloadClick}>
          Download cv
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
