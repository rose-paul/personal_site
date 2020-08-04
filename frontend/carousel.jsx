import React, { useEffect, useState } from 'react';

const Carousel = () => {

    const facts = [
      "React Buff",
      "Resourceful Traveler",
      "Lifelong Learner",
      "Team Player",
      "Pelmeni Enthusiast"
    ];

    const [display, setDisplay] = useState("React Buff");
    const len = facts.length;
    let index = 1;

    function changeDisplay() {
        let el = facts[index % len];
        setDisplay(el)
        index++
    }

    useEffect( () => {
        let intv = setInterval(changeDisplay, 2000)
        return () => clearInterval(intv)
    }, [])

    return (
        <h3>{display}</h3>
    )
}

export default Carousel;