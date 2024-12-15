import React, { useState } from "react";
import VHS_logo from "../../public/VHS_logo.png" 

function GuestBook(){
    const [showModal, setShowModal] = useState(false);
    
    const modal = () => {
        setShowModal(!showModal);
    };

    return(
        <div className="guestbook"> 
            <a onClick={modal}> 
                <img src={VHS_logo} alt="VHS logo"  />
            </a>
            <p>Guest Book</p>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Coming Soon</h2>
                        <button onClick={modal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default GuestBook