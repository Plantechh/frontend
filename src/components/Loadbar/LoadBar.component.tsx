import { useContext, useState } from "react";
import { QuestionContext } from "../../context/QuestionContext";
import './Loadbar.css';

function LoadBar() {
    const context = useContext(QuestionContext);
    return (
        <div className="loadbar">
            <div className="progress" style={{width: `${context.loaded}%`}}>
                {context.loaded}%
            </div>
        </div>
    )
}
export default LoadBar;