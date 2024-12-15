import { useState, useEffect } from "react";
import {musicPlayer} from "../musicPlayer";
import I2I from "/I2I.m4a";

    function LoadingPage ({onFinish}) {
        const [loadingText, setLoadingText] = useState("Loading...");

        const handleMouseMove = () => {
            musicPlayer(I2I); // Start playing music when the mouse moves
        };

        useEffect(()=>{
            //Create timer
            const timer = setTimeout(() =>{
                onFinish();
            }, 6000);

            //Fake Blinking Loading Text
            const interval = setInterval(() =>{
                setLoadingText((prev) => (prev === "Loading..." ? "Loading" : "Loading..."));
            },1000);

            return ()=> {
                clearTimeout(timer)
                clearInterval(interval)
            }
        }, [onFinish])

        return(
            <div className="loading" onMouseMove={handleMouseMove}>
                <div className="spinner"></div>
                <h1 className="text">{loadingText}</h1>
            </div>
        );
    }

export default LoadingPage