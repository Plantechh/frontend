import AnswerButton from '../../components/AnswerButton/AnswerButton';
import LoadBar from '../../components/Loadbar/LoadBar.component';
import './Question.css';

function Question() {
    return (
        <div className="fullscreen bg-grey">
            <div className="header">
                <div className="back">{'< voltar'}</div>
                <div className="center"> <LoadBar loaded={100} /></div>
                <div className="right"></div>
            </div>
            <div className="question">
                <h3>Como é seu dia perfeito?</h3>
            </div>
            <div className="answers">
                <div className="line">
                    <AnswerButton text={"Ir para um show de stand up"} color={"green"} />
                    <AnswerButton text={"Ir pra piscina com a galera em um dia de sol"} color={"orange"} />
                </div>
                <div className="line">
                    <AnswerButton text={"Ler um livro deitado numa rede tomando uma bebida quentinha"} color={"pink"} />
                    <AnswerButton text={"Ficar assistindo série num dia chuvoso debaixo de um edredom quentinho"} color={"yellow"} />
                </div>
            </div>
        </div>
    );
}
export default Question;