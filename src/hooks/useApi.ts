import { IQuestion } from './../core/responses/Question.interface';
import axios from "axios";

function useAPI() {
    const requester = axios.create({
        baseURL: 'https://run.mocky.io/'
    });

    const getQuestions = async (): Promise<any> => {
        const {data} = await requester.get<IQuestion>('v3/6297eb81-c97b-4f7c-bb50-9da6fdc53993');
        return data;
    }

    return {getQuestions};
}
export default useAPI;