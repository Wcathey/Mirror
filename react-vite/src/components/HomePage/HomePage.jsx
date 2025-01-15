import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

    const navigate = useNavigate();



    return (
        <div className="hp-container">
            <div className="headline-wrapper">
                    <h1 id="hp-title">Mirror</h1>
                    <h2 id="hp-headline"> The Future Of Beauty Is Personalized</h2>
                    <p id="hp-subheadline">Empowering self-care and confidence through personalized beauty tech.</p>
                    <div className="hp-btn-wrapper">
                    <button id="hp-try-btn" onClick={(e) => {
                        e.preventDefault();
                        navigate("/mirror");
                    }}>Try Demo</button>

                    </div>
            </div>
        <div className="hp-image-wrapper">
            <img id="hp-image"src='../../../public/Images/mirror-background.png'></img>
        </div>
        </div>
    )
}

export default HomePage;
