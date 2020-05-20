import React from "react";
import Facts from "./facts";

const About = () => (
  <div className="flex-wrapper">
    <img id="transform" src="../public/about.jpg" alt="" />
    <section className="about">
      <h2>About Me</h2>
      <article>
      My previous work teaching at tech companies in Moscow introduced me to the spellbinding realm of software
       development: the challenge of problem-solving and designing systems, the fun of building, and the potential for making 
       impactful products and experiences.
      </article>
      <article>
        Fast-forward from that initial enchantment to now: I have several 
        engineering projects using a range of technologies. 
        I’m especially adept at JavaScript, React and the surrounding eco-system. 
      </article>

      <article>
        Outside of programming, I love to travel. I was fortunate to explore a
        lot of places during my time in Moscow, both in the country and the
        surrounding region. This photo is from the Krasnodar region on top of
        the mountain Indyuk.
      </article>
    </section>
        <Facts />
  </div>
);

export default About;
