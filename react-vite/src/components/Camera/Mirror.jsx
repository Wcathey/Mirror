import { useEffect, useState } from "react"
import loadDeepAr from "../../DeepArSDK";
import './Mirror.css';

function Mirror() {

const [loaded, setLoaded] = useState(false)

    const Screen = () => {
        return (

            <div id="ar-screen">
                <div className="ar-btn-wrapper">
                    <button id="capture-btn"></button>
                </div>

            </div>
        )
    }


    return (

        <div className="deepar-container">
            {!loaded ?
                <div className="progress-bar__container">
                    <p id="progress-status">loading...</p>
                    <div className="progress-bar">
                    </div>
                </div>
                :
                <div id="screen-container">
                    <Screen />
                    <div id="ar-options">
                        <div className="effect-option">
                            <label for="skin">Skin</label>
                            <select name="skin" id="skin-options">
                                <option value="foundation">Foundation</option>
                                <option value="blush">Blush</option>
                            </select>
                        </div>
                        <div className="effect-option">
                            <label for="eye">Eyes</label>
                            <select name="eye" id="eye-options">
                                <option value="eyeshadow">Eye Shadow</option>
                                <option value="eyeliner">Eye Liner</option>
                                <option value="mascara">Mascara</option>
                            </select>
                        </div>
                        <div className="effect-option">
                            <label for="lips">Lips</label>
                            <select name="lips" id="lip-options">
                                <option value="lipstick">Lipstick</option>
                            </select>
                        </div>
                        <div className="effect-option">
                            <label for="add-on">Add Ons</label>
                            <select name="add-on" id="add-on-options">
                                <option value="eyelashes">Eyelashes</option>
                                <option value="glitter">Glitter</option>
                                <option value="gloss">Lip Gloss</option>
                            </select>
                        </div>
                    </div>
                </div>
}
        </div>
    )
}

export default Mirror;
