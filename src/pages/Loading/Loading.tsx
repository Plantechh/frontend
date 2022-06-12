import React, { useEffect, useState } from 'react';
import './Loading.css';
import Plant from './Plant.json';
import Lottie from 'react-lottie';
import { Navigate, useNavigate } from 'react-router-dom';

const texts = [
    "Carregando...",
    "Estamos avaliando seus dados",
    "Você sabia que 68% das plantas estão ameaçadas de extinção?",
    "Você sabia que plantas podem ouvir",
];
export interface ILoadingProps {
    forceLoading: boolean,
}

function Loading(props: ILoadingProps) {
    const defaultOptions = {
        loop: true, autoplay: true, animationData: Plant,
    };

    const navigate = useNavigate();
    const [newText, setNewText] = useState({
        text: texts[0],
        index: 0
    });

    useEffect(() => {
        if (props.forceLoading) {
            const time = setInterval(() => {
                const curIndex = newText.index;
                if (curIndex > 3) {
                    clearInterval(time);
                    return navigate('/result');
                }
                console.log(curIndex);
                setNewText((prev: any) => {
                    return {
                        text: texts[prev.index],
                        index: prev.index + 1
                    }
                });
            }, 2000)
            return () => clearInterval(time);
        }
    }, [newText]);
    return (
        <div className='full'>
            <div className="lottie">
                <Lottie
                    options={defaultOptions}
                    isPaused={false}
                    isStopped={false}
                    direction={1}
                    speed={1.5}
                    isClickToPauseDisabled={false}
                />
            </div>
            <div className="animated-text">
                <div className='text-format'>
                    {newText.text}
                </div>
            </div>

        </div>
    )
}

export default Loading;