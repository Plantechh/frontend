import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Share.css';
import QrCode from './QrCode.png'
import XIcon from './XIcon.png'
import ArrowIcon from './ArrowIcon.png'

function Share() {
    const navigate = useNavigate();
    return (
        <div>
            <view className='bg-green'></view>
            <view className='bg-qrcode'>
                <img src={QrCode} alt="QrCode" className='qrcode-position' />
            </view>
            <h1 className="text">scaneie e compartilhe nas suas redes sociais</h1>
            <img src={ArrowIcon} alt="ArrowIcon" className='bg-position' />
            <button className="buttonClose" onClick={() => navigate('/result')}>fechar</button>
            <view className='icon'>
                <img src={XIcon} alt="XIcon" className='x-icon' />
            </view>
        </div >
    )
}

export default Share;