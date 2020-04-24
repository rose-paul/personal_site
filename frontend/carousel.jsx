import React, { useEffect, useState } from 'react';

const Carousel = () => {

    const facts = ["Paul van Dyk Fanatic", "JavaScript Obsessed", "Wanderer", "Pelmeni Enthusiast"]
    const [display, setDisplay] = useState("Paul van Dyk Fanatic");
    const len = facts.length;
    let index = 1;

    function changeDisplay() {
        let el = facts[index % len];
        setDisplay(el)
        index++
    }

    useEffect( () => {
        let intv = setInterval(changeDisplay, 1500)
        return () => clearInterval(intv)
    }, [])

    return (
        <h3>{display}</h3>
    )
}

export default Carousel;