import "../style/index.scss"
import unnamed from '../assets/unnamed.jpg';

function Header() {
    return (
        <section className="header-section">
            <div style={{ paddingTop: '23px' }} className="container">
                <div className="row">
                    <div className="col-2">
                        <h1> Give at your training <br /> a new style ! </h1>
                        <p> Success is not always about greatness.
                            <br /> It's a matter of consistency.
                            Hard and consistent work earns success.
                            Greatness will come.
                        </p>
                        <a href="https://fr.reactjs.org/docs/jsx-in-depth.html"> Explore now &#8594; </a>
                    </div>
                    <div className="col-2">
                        <img src={unnamed} alt="landing view" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;