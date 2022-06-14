import axios from "axios";

function useAPI() {
    const requester = axios.create({
        baseURL: 'http://157.245.143.202/api/',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    });

    const getQuestions = async (): Promise<any> => {
        const {data} = await requester.get('get/questions/');
        return data;
    }

    const getResult = async(userAnswers: any): Promise<any> => {
        const {data} = await requester.post("find/response/", {questions: userAnswers});
        return data;
    }

    return {getQuestions, getResult};
}
export default useAPI;
