import { IData } from './../../app/interfaces/IData';
import { contentData } from './../actions/actions';
import * as actions from "../actions/actions";

export const initialStateContentData = {
    data : null,
    loading : true,
    error : false,
}

export interface stateInterface {
  data : IData | null;
  loading : boolean;
  error : boolean;
}

export default function contentReducer(state: stateInterface = initialStateContentData, action: contentData ) {
    switch (action.type) {

        case actions.GET_POSTS_SUCCESS :
            return { data : action.payload, loading : false, error : false };
        case actions.GET_POSTS_FAILURE :
            return { data : action.payload, loading : false, error : true };

  default:
    return state
  }
}
