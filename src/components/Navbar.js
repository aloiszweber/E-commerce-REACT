import React from 'react';
import basket from '../assets/cart.png';
import ooo from '../assets/ooo.png';


const Navbar = ({ showLinks, setShowLinks, styles }) => {

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }



    return (
        <header className="navbar">
            <div className="navbar1">
                <div class="logo" onClick={handleShowLinks}>
                    <figure>
                        <img id="burger_button" src={ooo} alt="New style logo" />
                        <figcaption> New style </figcaption>
                    </figure>
                </div>
            </div>
            <div className="navbar2">
                <div className="box_search">
                    <form action="">
                        <input id="search" type="search" value="" placeholder="search" name="search" />
                        <button id="make_search" type="submit"> <i className="fa fa-search"> </i> </button>
                    </form>
                </div>
                <nav>
                    <a href="basket.html"> <img id="basket" src={basket} alt="Cart icon" width="26px" /> </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;