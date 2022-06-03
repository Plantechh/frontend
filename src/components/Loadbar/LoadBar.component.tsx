import { useState } from "react";
import './Loadbar.css';

interface LoadbarProp {
    loaded: number
}
function LoadBar(props: LoadbarProp) {
    const [loaded, setLoaded] = useState(props.loaded);
    return (
        <div className="loadbar">
            <div className="progress" style={{width: `${loaded}%`}}>
                {/* {props.loaded}% */}
            </div>
        </div>
    )
}
export default LoadBar;