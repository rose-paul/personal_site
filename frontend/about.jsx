import React from "react";
import Facts from "./facts";

const About = () => (
  // <div className='header-wrapper'>
  <div className="flex-wrapper">
    <div id="transform">
      <picture>
        <source media='(min-width: 961px)' srcSet='../public/about.jpg' />
        <source media='(max-width: 960px)' srcSet='../public/about-small.jpg' />
        <img src='../public/about.jpg' />
      </picture>
    </div>
    <section className="about">
      <h2>About Me</h2>
      <article>
      My previous work at tech companies in Moscow introduced me to the spellbinding realm of software development – a realm of 
      problem-solving, critical thinking, being resourceful and creating unbelievable products and experiences. 
      </article>
      <article>
      *What do I bring to the table?*
      My experience includes interaction with people of all backgrounds and travel to places/climates I never imagined. 
      I’ve constantly pushed my horizons, stepped outside my comfort zone and consided new perspectives. 
      My professional work mostly has been client-centric. This experience leads me to be resourceful and creative in producing 
      usable solutions, whether it be a system design issue, a React frontend, a Node backend, or an isolated algorithmic problem.
      </article>
    </section>
        <Facts />
  </div>
  // </div>
);

export default About;
