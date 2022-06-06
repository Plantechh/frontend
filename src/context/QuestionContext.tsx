import React, { useEffect, useState } from "react"
import { IQuestion } from "../core/responses/Question.interface";
import useAPI from "../hooks/useApi";

export const QuestionContext = React.createContext<any>({});

function QuestionProvider(props: any) {
    const [loaded, setLoaded] = useState(0);
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [remainQuestions, setRemainQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const api = useAPI();

    const setTotalLoadbar = (total: number) => {
        console.log('will set to ', total);
        const int = setInterval(() => {
            if(loaded < total) {
                setLoaded(loaded + 1);
            }else{
                clearInterval(int);
            }
        }, 30);
    }
    const response: any = {
        loaded,
        setTotalLoadbar,
        questions,
        setRemainQuestions,
        loading,
        setLoading,
        setQuestions,
    }
    return (
        <QuestionContext.Provider value={response}>
            {props.children}
        </QuestionContext.Provider>
        )
}
export default QuestionProvider;