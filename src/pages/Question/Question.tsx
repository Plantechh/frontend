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
    const request = useCallback(async() => {
        const data = await api.getResult(context.answers);
        context.setRequestResult(data);
    }, [context.requestResult])

    useEffect(() => {
        if(context.questions.length == 0 && context.points > 0) {
            request();
            return navigate('/loading');
        }
    }, [context.points]);

    const proxima = (alternative: any) => {
        context.questions.shift();
        context.setTotalLoadbar(context.loaded + totalPorcent);
        context.answers.push({
            id_question: alternative.id + "",
            response: alternative.points + ""
        })
        if(context.questions.length > 0) {
            setCurrent(context.questions[0]);
            context.setPoints((prev: number) => prev + parseInt(alternative.points));
        }else{
            context.setPoints((prev: number) => prev + parseInt(alternative.points));
        }
        context.setAnswers(context.answers);
        
    }
    if(context.loading == true) {
        return (<Loading forceLoading={false}></Loading>)
    }
    if(!currentQuestion.id) {
        setCurrent(context.questions[0]);
    }
    console.log(currentQuestion.alternatives);
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
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[0])} text={currentQuestion.alternatives[0].title} color={"green"} />
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[1])} text={currentQuestion.alternatives[1].title} color={"orange"} />
                </div>
                <div className="line">
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[2])} text={currentQuestion.alternatives[2].title} color={"pink"} />
                    <AnswerButton onClick={() => proxima(currentQuestion.alternatives[3])} text={currentQuestion.alternatives[3].title} color={"yellow"} />
                </div>
            </div>
        </div>
    );
}
export default Question;