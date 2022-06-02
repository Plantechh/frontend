import LoadBar from '../../components/Loadbar/LoadBar.component';
import './Question.css';

function Question() {
    return (
        <div className="fullscreen bg-grey">
            <div className="header">
                <div className="back">{'< voltar'}</div>
                <div className="center"> <LoadBar loaded={0} /></div>
                <div className="right"></div>
            </div>
        </div>
    );
}
export default Question;