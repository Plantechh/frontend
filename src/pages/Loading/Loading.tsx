import React, { useEffect, useState } from 'react';
import './Loading.css';
import Plant from './plant.json';
import Lottie from 'react-lottie';

const text = [
    "carregando...",
    "estamos avaliando seus dados",
    "você sabia que 68% das plantas estão ameaçadas de extinção?",
    "você sabia que plantas podem ouvir"
];

function Loading() {
    const defaultOptions = {
        loop: true, autoplay: true, animationData: Plant,
    };

    const [newText, setnewText] = useState(0);

    return (
        <div>
            <Lottie style={{ flex: 1, padding: 0, margin: 0, position: 'absolute', left: 20, top: 150, }}
                options={defaultOptions}
                isPaused={false}
                isStopped={false}
                direction={1}
                speed={1.5}
                height={600}
                width={1900}
                isClickToPauseDisabled={false}
            />
            <div className="animated-text">
                <div className='text-format'>
                    <h1>text:{newText}</h1>
                </div>
            </div>

        </div>
    )
}

export default Loading;