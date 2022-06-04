import './Loading.css';
import Union from './Union.svg'

function Loading() {
    return (
        <div className="unionWrapper">
            <img src={Union} alt="" />
            <h1 className="text">carregando...</h1>
        </div>
    )
}

export default Loading;
