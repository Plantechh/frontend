import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnswerButton from '../../components/AnswerButton/AnswerButton';
import LoadBar from '../../components/Loadbar/LoadBar.component';
import { QuestionContext } from '../../context/QuestionContext';
import useAPI from '../../hooks/useApi';
import Loading from '../Loading/Loading';
import './Question.css';

function Question() {
    const navigate = useNavigate();
    const context = useContext(QuestionContext);
    const api = useAPI();
    const [currentQuestion, setCurrent] = useState<any>({});
    let totalQuestions = 0;

        const fetchQuestions = useCallback(async() => {
            context.setLoading(true);
            let questions;
            try {
                questions = await api.getQuestions();
                context.setQuestions(questions.questions);
                context.setRemainQuestions(...questions.questions);
                totalQuestions = questions.questions.length
                context.setLoading(false);
            } catch (error) {
                console.log("ERROR", error);
            }
            context.setLoading(false);
            return questions;
        }, [context.questions]);

    useEffect(() => {
        fetchQuestions();
        setLoadbar();
    }, []);

    const setLoadbar = () => {
        context.setTotalLoadbar(80);
    }
    const proxima = () => {
        context.questions.shift();
        if(context.questions.length > 0) {
            setCurrent(context.questions[0]);
        }else{
            alert('END');
        }
        console.log(context.loaded);
        
    }
    if(context.loading == true) {
        return (<Loading></Loading>)
    }
    if(!currentQuestion.id) {
        setCurrent(context.questions[0]);
    }
    return (
        <div className="bg-grey">
            <div className="header">
                <div className="back" onClick={() => navigate('/')}>{'< voltar'}</div>
                <div className="center"><LoadBar /></div>
                <div className="right"></div>
            </div>
            <div className="question">
                <h3>{currentQuestion.title}</h3>
            </div>
            <div className="answers">
                <div className="line">
                    <AnswerButton onClick={proxima} text={"Ir para um show de stand up"} color={"green"} />
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