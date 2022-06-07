import React, { useEffect, useState } from "react"
import { IQuestion } from "../core/responses/Question.interface";
import useAPI from "../hooks/useApi";

export const QuestionContext = React.createContext<any>({});

function QuestionProvider(props: any) {
    const [loaded, setLoaded] = useState(0);
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [remainQuestions, setRemainQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [points, setPoints] = useState<number>(0);
    const api = useAPI();

    const setTotalLoadbar = (total: number) => {
        const int = setInterval(() => {
            if(loaded < total) {
                setLoaded((prev: number) => {
                    if(prev < total) {
                        return prev + 1;
                    }else {
                        clearInterval(int);
                        return total;
                    }
                });

            }else{
                clearInterval(int);
            }
        }, 30);
    }
    const response: any = {
        loaded,
        setTotalLoadbar,
        setLoaded,
        questions,
        setRemainQuestions,
        loading,
        setLoading,
        setQuestions,
        points,
        setPoints,
    }
    return (
        <QuestionContext.Provider value={response}>
            {props.children}
        </QuestionContext.Provider>
        )
}
export default QuestionProvider;