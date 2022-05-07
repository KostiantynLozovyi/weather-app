import { GET_HOST } from './../../app/constants/index';
import { ActionCreator, Dispatch } from 'redux';
import { IData } from './../../interfaces/IData';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

interface getDataActionInterface {
    type: typeof GET_POSTS_SUCCESS;
    payload: IData;
}

export type contentData = getDataActionInterface

export const getData: ActionCreator<getDataActionInterface> = (payload: IData) => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

export function fetchTasks(input:string) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(GET_HOST(input));
            const data = await response.json();
            dispatch(getData(data))

        } catch (error) {
            alert('Invalid city name')
            const response = await fetch(GET_HOST('Kyiv'));
            const data = await response.json();
            dispatch(getData(data))

        }
    };
}