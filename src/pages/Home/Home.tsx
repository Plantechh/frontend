import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <h1 className="text1">Que <label htmlFor="" className="text2">planta</label></h1>
                <h1 className="text3">eu sou?</h1>
            </div>
            <button className="buttonHome" onClick={() => navigate('/question')}>começar</button>
        </div >
    )
}

export default Home;