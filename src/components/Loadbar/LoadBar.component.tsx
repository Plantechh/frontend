import { useState } from "react";
import LoadbarProp from "../../core/interfaces/Loadbar.interface";
import './Loadbar.css';

function LoadBar(props: LoadbarProp) {
    const [loaded, setLoaded] = useState(props.loaded);

    setTimeout(() => {setLoaded(loaded + 1)}, 50)
    return (
        <div className="loadbar">
            <div className="progress" style={{width: `${loaded}%`}}>
            </div>
        </div>
    )
}
export default LoadBar;