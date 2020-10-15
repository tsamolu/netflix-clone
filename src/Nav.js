import React, {useState, useEffect} from 'react'
import "./Nav.css"


function Nav() {
    const[show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            window.scrollY > 100 ? handleShow(true): handleShow(false)
        console.log("A")});

            return () => {
                window.releaseEvents("scroll");
            }
        }, [])
            
        
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="../netflix logo.png" alt="netflix logo"/>
            <img className="nav__avatar" src="../emoticon.png" alt="avatar"/>
        </div>
    );
}

export default Nav
