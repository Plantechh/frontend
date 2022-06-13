import { useNavigate } from 'react-router-dom';
import './Result.css';
import ShareIcon from '../../assets/ShareIcon.png'
import Arrow2Icon from '../../assets/Arrow2Icon.png'
import QrCode from '../../assets/QrCode.png'
import XIcon from '../../assets/XIcon.png'
import ArrowIcon from '../../assets/ArrowIcon.png'
import { useContext, useEffect, useState } from 'react';
import { QuestionContext } from '../../context/QuestionContext';
import Loading from '../Loading/Loading';

function Result() {
    const navigate = useNavigate();
    const context = useContext(QuestionContext);
    const [isBlured, setBlured] = useState<boolean>(false);

    useEffect(() => {
        if (isBlured) {
            document.getElementById("blur")?.classList.add("blur-all");
        } else {
            document.getElementById("blur")?.classList.remove("blur-all");
        }
    }, [isBlured]);

    if (!context.requestResult.id) {
        console.log("context", context.requestResult);
        return (<Loading forceLoading={false}></Loading>)
    }
    return (
        <div>
            <div className='container' id="blur">
                <h1 className='name'>{context.requestResult.name}</h1>
                <h3 className='scientificName'>{context.requestResult.scientificName} <img src={Arrow2Icon} alt="Arrow2Icon" className='arrow-link' /></h3>
                <div className="desc_img">
                    <div className="text">
                        <p>{context.requestResult.describe}</p>
                    </div>
                    <div className="img">
                        <img src={context.requestResult.image} className='image' alt={context.requestResult.name} />
                    </div>
                </div>
                <div className="buttons">
                    <button className='restart_button' onClick={() => navigate('/')}>Reiniciar</button>
                    <button className="button-result-share" onClick={() => setBlured(true)}>compartilhe
                        <img src={ShareIcon} alt="ShareIcon" className='share-icon' />
                    </button>
                </div>
            </div>
            {isBlured ?
                <div>
                    <view className='bg-green'></view>
                    <view className='bg-qrcode'>
                        <img src={QrCode} alt="QrCode" className='qrcode-position' />
                    </view>
                    <h1 className="textQR">Scaneie e compartilhe nas suas redes sociais</h1>
                    <img src={ArrowIcon} alt="ArrowIcon" className='bg-position' />
                    <button className="buttonClose" onClick={() => setBlured(false)}>fechar
                    </button>
                    <view className='icon' onClick={() => setBlured(false)}>
                        <img src={XIcon} alt="XIcon" className='x-icon' />
                    </view>
                </div>
                : null}
        </div >
    )
}

export default Result;