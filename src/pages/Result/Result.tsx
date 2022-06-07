import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Result.css';
import ShareIcon from './ShareIcon.png'

function Result() {
    const navigate = useNavigate();
    return (
        <div>
            <button className="button-result-restart" onClick={() => navigate('')}>reiniciar</button>
            <button className="button-result-share" onClick={() => navigate('/share')}>compartilhe
                <img src={ShareIcon} alt="ShareIcon" className='share-icon' />
            </button>
        </div >
    )
}

export default Result;