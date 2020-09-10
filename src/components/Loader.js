import React from "react";

export default () => {
    return (
        <div className="load-overlay">
            <div className="heart"></div>
            <p style={{backgroundColor: 'white', fontFamily: "'Roboto', sans-serif"}}>Please wait while we do the calculation...</p>
        </div>
    );
};
