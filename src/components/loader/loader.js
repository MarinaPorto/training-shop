
import React from "react";
import './loader.css';

export const Loader = () => {
    return (
        <div className="loader__block" data-test-id="loader">
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}



