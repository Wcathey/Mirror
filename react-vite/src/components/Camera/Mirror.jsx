import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { initializeDeepAr,reloadDeepAr } from "../../redux/deepar";
import * as deepar from "deepar";
import './Mirror.css';

function Mirror() {
    const dispatch = useDispatch();
    const deepARElement = useRef();
    const deepAr = useSelector((store) => store.deepar.Sdk)
    useEffect(() => {
        if(deepARElement.current) {
            if(deepAr) {
                dispatch(reloadDeepAr(deepAr)).then(
                    dispatch(initializeDeepAr(deepARElement.current))
                )
            }
            else {
            dispatch(initializeDeepAr(deepARElement.current))
            }
    }
    }, [dispatch])



    return (

        <div className="deepar-container">

            <div id="screen-container">
                <div id="ar-screen" ref={deepARElement}>
                    <div className="ar-btn-wrapper">
                        <button id="capture-btn"></button>
                    </div>

                </div>
                <div id="ar-options">
                    <div className="effect-option">
                        <label>Skin</label>
                        <select name="skin" id="skin-options">
                            <option value="foundation">Foundation</option>
                            <option value="blush">Blush</option>
                        </select>
                    </div>
                    <div className="effect-option">
                        <label>Eyes</label>
                        <select name="eye" id="eye-options">
                            <option value="eyeshadow">Eye Shadow</option>
                            <option value="eyeliner">Eye Liner</option>
                            <option value="mascara">Mascara</option>
                        </select>
                    </div>
                    <div className="effect-option">
                        <label>Lips</label>
                        <select name="lips" id="lip-options">
                            <option value="lipstick">Lipstick</option>
                        </select>
                    </div>
                    <div className="effect-option">
                        <label>Add Ons</label>
                        <select name="add-on" id="add-on-options">
                            <option value="eyelashes">Eyelashes</option>
                            <option value="glitter">Glitter</option>
                            <option value="gloss">Lip Gloss</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mirror;
