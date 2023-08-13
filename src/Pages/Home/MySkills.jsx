import React from "react";
import data from "../../data/index.json";

export default function MySkills() {
  const frontendSkills = data?.skills?.filter(item => item.category === "frontend");
  const backendSkills = data?.skills?.filter(item => item.category === "backend");

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--category">
          <h3 className="skills--category--heading">Frontend Development</h3>
          <div className="skills--category--items">
            {frontendSkills?.map((item, index) => (
              <article key={index} className="article">
                <img src={item.src} alt={item.title} className="icon" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skills--category">
          <h3 className="skills--category--heading">Backend Development</h3>
          <div className="skills--category--items">
            {backendSkills?.map((item, index) => (
              <article key={index} className="article">
                <img src={item.src} alt={item.title} className="icon" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
