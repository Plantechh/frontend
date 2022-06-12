import { useNavigate } from 'react-router-dom';
import './Result.css';
import ShareIcon from '../../assets/ShareIcon.png'
import Arrow2Icon from '../../assets/Arrow2Icon.png'
import QrCode from '../../assets/QrCode.png'
import XIcon from '../../assets/XIcon.png'
import ArrowIcon from '../../assets/ArrowIcon.png'
import { useState } from 'react';

function Result() {
    const navigate = useNavigate();
    const [isBlured, setBlured] = useState<boolean>(false);

    if (isBlured) {
        document.getElementById("blurOn")?.classList.add("on-blur-effect");
    } else {
        document.getElementById("blurOn")?.classList.remove("on-blur-effect");
    }
    return (
        <div>
            <h1 className="name">Coroa-de-frade</h1>
            <h1 className="scientificName">Melocactus bahiensis</h1>
            <img src={Arrow2Icon} alt="Arrow2Icon" className='arrow-link' />
            <div className="container">
                <a className="describe">Você é uma pessoa <label htmlFor="" className="negrito">forte e durão</label>(ona), como o cacto.  Por ser <label htmlFor="" className="negrito">introvertido</label>(a), pode acabar sendo rude e machucando sem querer (assim como o cacto machuca com os seus espinhos) com quem não conhece, mas quem o conhece sabe quão <label htmlFor="" className="negrito">especial e raro</label>(a) você é. Você adora ir na praia para tomar sol, mas não gosta de passar muito tempo na água. Você sempre será lembrado(a) como aquela pessoa que é <label htmlFor="" className="negrito">esforçada e trabalhadora</label> e que, mesmo nas condições mais adversas (como uma seca), se mantém em pé e consegue tirar aprendizados até desses momentos difíceis.</a>
            </div>
            <div className="container-image"></div>
            <button className="button-result-restart" onClick={() => navigate('/')}>reiniciar</button>
            <button className="button-result-share" onClick={() => setBlured(true)}>compartilhe
                <img src={ShareIcon} alt="ShareIcon" className='share-icon' />
            </button>
            <div id="blurOn"></div>

            {isBlured ?
                <div>
                    <view className='bg-green'></view>
                    <view className='bg-qrcode'>
                        <img src={QrCode} alt="QrCode" className='qrcode-position' />
                    </view>
                    <h1 className="text">scaneie e compartilhe nas suas redes sociais</h1>
                    <img src={ArrowIcon} alt="ArrowIcon" className='bg-position' />
                    <button className="buttonClose" onClick={() => navigate('/result')}>fechar
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