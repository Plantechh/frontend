import { IQuestion } from './../core/responses/Question.interface';
import axios from "axios";

function useAPI() {
    const requester = axios.create({
        baseURL: 'https://run.mocky.io/'
    });

    const getQuestions = async (): Promise<any> => {
        const {data} = await requester.get<IQuestion>('v3/3cae2b17-50df-442b-8a0d-8171c864e900');
        console.log(data);
        return data;
    }

    return {getQuestions};
}
export default useAPI;