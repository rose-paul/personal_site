import React from "react";

const About = () => (
  <div className="flex-wrapper">
    {/* <img id="transform" src="about.jpg" alt="" /> */}

    <section className="about">
      <h2>About Me</h2>
      <article>
        I came into the tech realm as an engineer following my previous work
        teaching at tech companies in Moscow. I enjoy all aspects of fullstack development, 
        from page design to system design. My most recent endeavors have focused on 
        engineering in JavaScript, React and AWS.
      </article>
      <article>
        I value teamwork, continual growth and purpose-driven work. I love
        tackling substantive, real-world problems with simple, user-friendly
        solutions.
      </article>
      <article>
        Outside of programming, I love to travel. I was fortunate to explore a
        lot of places during my time in Moscow, both in the country and the
        surrounding region. This photo is from the Krasnodar region on top of
        the mountain Indyuk. Feel free to reach out if you want to chat more!
      </article>
    </section>
  </div>
);

export default About;
