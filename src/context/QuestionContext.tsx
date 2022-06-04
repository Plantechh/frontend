import React, { useEffect, useState } from "react"
import { IQuestion } from "../core/responses/Question.interface";
import useAPI from "../hooks/useApi";

export const QuestionContext = React.createContext<any>({});

function QuestionProvider(props: any) {
    const [loaded, setLoaded] = useState(0);
    const [questions, setQuestion] = useState<IQuestion[]>([]);
    const [actualQuestion, setActualQuestion] = useState<Partial<IQuestion>>({});
    const [completedQuestions, setCompletedQuestions] = useState<IQuestion[]>([]);
    const api = useAPI();

    useEffect(() => {
        const fetchQuestions = async() => {
            try {
                const fullQuestions = await api.getQuestions();
                setQuestion(fullQuestions);
            } catch (error) {
                console.log("ERROR", error);
            }
        }
        fetchQuestions();
    }, [])

    const setTotalLoadbar = (total: number) => {
        setTimeout(() => loaded < total ? setLoaded(loaded + 1) : setLoaded(total), 30);
    }
    const response: any = {
        loaded,
        setTotalLoadbar,
        questions,
        actualQuestion,
        setActualQuestion,
        completedQuestions,
    }
    return (
        <QuestionContext.Provider value={response}>
            {props.children}
        </QuestionContext.Provider>
        )
}
export default QuestionProvider;