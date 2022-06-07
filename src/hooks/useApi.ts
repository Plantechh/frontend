import { IQuestion } from './../core/responses/Question.interface';
import axios from "axios";

function useAPI() {
    const requester = axios.create({
        baseURL: 'https://mocki.io/'
    });

    const getQuestions = async (): Promise<any> => {
        const {data} = await requester.get<IQuestion>('v1/d7b27cc7-89c4-4cbe-94e4-3239d9edf52a');
        return data;
    }

    return {getQuestions};
}
export default useAPI;