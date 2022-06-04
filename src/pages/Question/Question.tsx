import { useContext, useEffect, useState } from 'react';
import AnswerButton from '../../components/AnswerButton/AnswerButton';
import LoadBar from '../../components/Loadbar/LoadBar.component';
import { QuestionContext } from '../../context/QuestionContext';
import './Question.css';

function Question() {
    const context = useContext(QuestionContext);
    const [loading, setLoading] = useState<Boolean>(false);
    context.setTotalLoadbar(80);
    
    useEffect(() => {
        if(!context.actualQuestion) {
            setLoading(true);
        }else{
            setLoading(false);
        }
        console.log(context.actualQuestion);
    }, [context.actualQuestion]);
    
    if(loading == true) {
        return (<>CARREGANDO....</>)
    }
    return (
        <div className="bg-grey">
            <div className="header">
                <div className="back">{'< voltar'}</div>
                <div className="center"><LoadBar /></div>
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