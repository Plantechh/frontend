import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Result.css';
import ShareIcon from './ShareIcon.png'
import Arrow2Icon from './Arrow2Icon.png'

function Result() {
    const navigate = useNavigate();
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
            <button className="button-result-share" onClick={() => navigate('/share')}>compartilhe
                <img src={ShareIcon} alt="ShareIcon" className='share-icon' />
            </button>
        </div >
    )
}

export default Result;