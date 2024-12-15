import { useState, useEffect } from "react";

    function LoadingPage ({onFinish}) {
        const [loadingText, setLoadingText] = useState("Loading...");

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
            <div className="loading">
                <div className="spinner"></div>
                <h1 className="text">{loadingText}</h1>
            </div>
        );
    }

export default LoadingPage