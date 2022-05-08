import { GET_HOST } from './../../app/constants/index';
import { ActionCreator, Dispatch } from 'redux';
import { IData } from '../../app/interfaces/IData';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

interface getDataActionInterface {  
    type: string;
    payload: IData | null;
}

export type contentData = getDataActionInterface

export const getDataSuccess: ActionCreator<getDataActionInterface> = (payload: IData) => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

export const getDataFailure: ActionCreator<getDataActionInterface> = (payload : IData) => ({
    type: GET_POSTS_FAILURE,
    payload,
});

export function fetchTasks(input:string) {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(GET_HOST(input));
            const data = await response.json();
            console.log(response.status)
            if (response.status !== 200 ){
                throw new Error(data.message)
            }
            dispatch(getDataSuccess(data))

        } catch (error) {
            alert(error)
        } 
    };
}