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
        setTimeout(() => loaded < total ? setLoaded(loaded + 1) : setLoaded(total), 30);
    }
    const addCompleted = (id: number) => {
        console.log("antigo", remainQuestions);
        const remove = remainQuestions.filter((value: any) => value.id == id)
        remainQuestions.splice(remainQuestions.indexOf(remove));
        console.log('novo', remainQuestions);
    };
    const response: any = {
        loaded,
        setTotalLoadbar,
        questions,
        remainQuestions,
        setRemainQuestions,
        addCompleted,
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