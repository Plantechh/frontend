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
    const [totalPorcent, setTotalPorcent] = useState(25);

        const fetchQuestions = useCallback(async() => {
            context.setLoading(true);
            let questions;
            try {
                questions = await api.getQuestions();
                context.setQuestions(questions.questions);
                setTotalPorcent(100 / questions.questions.length);
                context.setLoading(false);
            } catch (error) {
                console.log("ERROR", error);
            }
            context.setLoading(false);
            return questions;
        }, [context.questions]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    useEffect(() => {
        if(context.questions.length == 0 && context.points > 0) {
            alert('END TOUR');
            context.setLoading(true);
            console.log("finish questions points", context.points);
        }
    }, [context.points]);
    const endQuestions = () => {
        console.log("FINISH TOUR POINTS", context.points);
        context.setLoading(true);
    }
    const proxima = (points: string) => {
        context.questions.shift();
        context.setTotalLoadbar(context.loaded + totalPorcent);
        if(context.questions.length > 0) {
            setCurrent(context.questions[0]);
            console.log("somei", points);
            context.setPoints((prev: number) => prev + parseInt(points));
        }else{
            context.setPoints((prev: number) => prev + parseInt(points));
        }
        
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
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[0].points)} text={"Ir para um show de stand up"} color={"green"} />
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[1].points)} text={"Ir pra piscina com a galera em um dia de sol"} color={"orange"} />
                </div>
                <div className="line">
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[2].points)} text={"Ler um livro deitado numa rede tomando uma bebida quentinha"} color={"pink"} />
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[3].points)} text={"Ficar assistindo série num dia chuvoso debaixo de um edredom quentinho"} color={"yellow"} />
                </div>
            </div>
        </div>
    );
}
export default Question;