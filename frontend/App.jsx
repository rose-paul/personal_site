import React, { useState } from 'react';
import NavBar from './navBar';

const App = () => {
   
    const [component, setComponent] = useState(<Home />)

    function changeTab(num) {
        switch (num) {
            case 1:
                return setComponent(<Home />)
            case 2: 
                return setComponent(<About />)
            case 3: 
                return setComponent(<Portfolio />)
            default:
                return
        }
    }
   
   return ( <>
        <NavBar changeTab={changeTab} />
        {component}
    </>)
}

export default App;