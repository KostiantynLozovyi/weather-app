import { IData } from './../../interfaces/IData';
import { contentData } from './../actions/actions';
import * as actions from "../actions/actions";

export const initialStateContentData = {
    data : null,
    loading : true,
}

export interface stateInterface {
  data : IData | null;
  loading : boolean;
}

export default function contentReducer(state: stateInterface = initialStateContentData, action: contentData ) {
    switch (action.type) {

        case actions.GET_POSTS_SUCCESS :
            return { data : action.payload, loading : false };

  default:
    return state
  }
}
