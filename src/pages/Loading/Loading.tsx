import { useContext, useEffect, useState } from 'react';
import './Loading.css';
import Union from './Union.svg'

function Loading() {
    //const [isPink, isOrange, isGreen, isYellow] = useState(300);

    return (
        <div className="unionWrapper">
            <img src={Union} alt="Union Logo" />
            <h1 className="text">carregando...</h1>
        </div>
    )
}

export default Loading;

//style={{ transition: '.3s', marginTop: 40, fontSize: '5em', position: 'absolute', transformOrigin: 'center bottom', transform: { from: 'translateX(-100%) rotate(-90deg)', enter: 'translateX(0%)', leave: 'translateX(100%) rotate(90deg)', } }}