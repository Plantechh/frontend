import { useCallback, useContext, useEffect, useState } from 'react';
import AnswerButton from '../../components/AnswerButton/AnswerButton';
import LoadBar from '../../components/Loadbar/LoadBar.component';
import { QuestionContext } from '../../context/QuestionContext';
import useAPI from '../../hooks/useApi';
import Loading from '../Loading/Loading';
import './Question.css';

function Question() {
    const context = useContext(QuestionContext);
    const api = useAPI();
    context.setTotalLoadbar(10);
    const [currentQuestion, setCurrent] = useState<any>({});
    const [index, setIndex] = useState(0);

        const fetchQuestions = useCallback(async() => {
            context.setLoading(true);
            let questions;
            try {
                questions = await api.getQuestions();
                context.setQuestions(questions.questions);
                context.setRemainQuestions(...questions.questions);
                // defineQuestion(questions);
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

    const defineOrder = (questions: any[]) => {
        const array: any[] = [];
        questions.every((v: any) => array.push(v));
        context.setRemainQuestions(array);
    }
    // const defineQuestion = () => {
    //     let next = {};
    //     context.questions.every((question: any) => {
    //         console.log('q', question);
    //         console.log('from context', context.completedQuestions);    
    //         console.log("context.completedQuestions.includes(id)", context.completedQuestions.includes(question.id), question.id)
    //         if(context.completedQuestions.includes(question.id) == false) {
    //             next = question
    //             return false;
    //         }
    //     });
    //     if(Object.keys(next).length == 0) {
    //         alert('PERGUNTAS COMPLETAS!');
    //     }else{
    //         currentQuestion = next;
    //     }
    // }
    const proxima = () => {
        // context.addCompleted(currentQuestion.id);
        console.log("ind", index);
        console.log("id", context.questions.length - 1);
        if(index == context.questions.length - 1) {
            alert('ALL DONE');
        }else{
            setIndex(index + 1);
            console.log("next");
        }
    }
    if(context.loading == true) {
        return (<Loading></Loading>)
    }
    if(!currentQuestion.id) {
        setCurrent(context.questions[index]);
    }
    return (
        <div className="bg-grey">
            <div className="header">
                <div className="back">{'< voltar'}</div>
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