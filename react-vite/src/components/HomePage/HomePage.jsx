import { NavLink } from "react-router-dom";
import "./HomePage.css";

function HomePage() {





    return (
        <div className="hp-container">
            <div className="hp-top-container">

                <div id="hp-top-contents">

                    <div id="hp-title">
                        <h1>Mirror</h1>

                        <div id="cta-lower-text">
                            <h2 id="hp-headline">Discover Your Authentic Beauty</h2>
                            <h3 id="hp-subheadline">Empowering self-expression through personalized beauty insights.</h3>

                            <div id="hp-cta">
                                <NavLink to="/mirror">
                                    Take a look...
                                </NavLink>

                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="problem-container">
                <div id="problem-text-wrapper">
                    <h1>Tired of One-Size-Fits-All Beauty Standards?</h1>
                    <p>
                        The modern beauty industry has led to a homogenization of aesthetics, with unrelenting pressures to conform. Mirror helps you break free by celebrating what makes you unique.
                    </p>
                </div>

                <img id="collage-image" src="../../../public/Images/diverse-collage.jpg" alt="woman-collage"></img>
            </div>

            <div className="guide-container">
                <div id="guide-text-wrapper">
                    <h1>Meet Mirror </h1>
                    <h2>Your Personalized Beauty Assistant</h2>
                    <p>Mirror uses advanced facial scanning, AI, and AR to provide tailored recommendations for accessories, colors, and makeup that complement your natural features. We’re here to help you look and feel like your most authentic self.</p>
                </div>
                <div id="guide-video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CaDb2VL3IXM?si=bMKuB7yCXbxDT-6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mmLq9C5Di44?si=_9L2RkyMpMhVrA2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </div>


    )
}

export default HomePage;
