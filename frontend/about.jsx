import React from "react";
import Facts from "./facts";

const About = () => (
  <div className="flex-wrapper">
    <img id="transform" src="../public/about.jpg" alt="" />
    <section className="about">
      <h2>About Me</h2>
      <article>
        I came into the tech realm as an engineer following my previous work
        teaching at tech companies in Moscow. I enjoy all aspects of fullstack development, 
        from page design to system design. My most recent endeavors have focused on 
        engineering in JavaScript, React and AWS.
      </article>

      <article>
        Outside of programming, I love to travel. I was fortunate to explore a
        lot of places during my time in Moscow, both in the country and the
        surrounding region. This photo is from the Krasnodar region on top of
        the mountain Indyuk. Feel free to reach out if you want to chat more!
      </article>
    </section>
        <Facts />
  </div>
);

export default About;
