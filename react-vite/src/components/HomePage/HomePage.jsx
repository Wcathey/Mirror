import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

    const navigate = useNavigate();



    return (
        <div className="hp-container">
            <div className="headline-wrapper">
                    <h1 id="hp-title">Mirror</h1>
                    <h2 id="hp-headline"> Discover Your Authentic Beauty</h2>
                    <p id="hp-subheadline">Empowering self-expression through personalized beauty insights.</p>
                    <div className="hp-btn-wrapper">
                    <button id="hp-try-btn" onClick={(e) => {
                        e.preventDefault();
                        navigate("/mirror");

                    }}>Take A Look In The Mirror</button>

                    </div>
            </div>
        <div className="hp-image-wrapper">
            <img id="hp-image"src='../../../public/Images/mirror-background.png'></img>
        </div>
        </div>
    )
}

export default HomePage;
