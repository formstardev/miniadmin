import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';
export const bookActions = (loading:any, error:any, data:any) => {
    return async (dispatch: Dispatch<Action>) => {
        if(loading){
            dispatch({
                type: ActionType.GET_BOOK_PENDING
            });
        } else if(error) {
            dispatch({
                type: ActionType.GET_BOOK_FAIL,
                payload: error.message
            });
        } else {
            dispatch({
                type: ActionType.GET_BOOK_SUCCESS,
                payload: data.books 
            });
        }
    }
} 