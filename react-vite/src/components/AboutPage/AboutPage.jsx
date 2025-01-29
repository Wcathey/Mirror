import "./AboutPage.css";
function AboutPage() {
    return (
        <div className="about-page-container">



            <div id="about-images-wrapper">
                <div id="deepar-demo-image">
                    <img src="https://cdn.prod.website-files.com/613b7b21cfaac7287728a106/63e5358a6b0072eb5a3579da_Kim_MakeUp.jpg"></img>
                </div>
                <div id="mirror-logo-image">
                    <img src="../../Images/mirror-background.png"></img>
                </div>
                <div id="sdk-deepar-logo">
                    <img src="../../Images/face-mesh.png"></img>
                </div>
            </div>


            <div className="about-wrapper">
                <div id="mission-wrapper">
                    <h1>Misson</h1>
                    <p>"Mirror is dedicated to empowering individuals by redefining beauty standards through personalized recommendations and augmented reality, fostering self-care and self-expression."</p>
                </div>
                <div id="vision-wrapper">
                    <h1>Vision</h1>
                    <p>"A world where every individual can confidently explore their unique beauty with the help of cutting-edge beauty technology."</p>
                </div>
                <div id="process-wrapper">
                    <h1>Process</h1>
                    <uL>
                        <li>
                            Personalized AI-driven facial scanning and beauty suggestions.
                        </li>
                        <li>
                            Augmented reality for real-time try-ons.
                        </li>
                        <li>
                            Customizable makeup filters for instant transformations.
                        </li>
                    </uL>
                </div>

            </div>
        </div>





    )
}

export default AboutPage;
