import { Action, ActionType } from '../actionTypes/index';

export interface Book {
    title: string,
    author: string,
}

interface State {
    books: Book[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    books: [],
    loading: false, 
    error: null 
}

const booksReducer = (state: State = initialState, action: Action):State => {
    switch(action.type) {
        case ActionType.GET_BOOK_PENDING:
            return {
                loading: true,
                books: [],
                error: null  
            } 
        case ActionType.GET_BOOK_SUCCESS:
            return {
                loading: false,
                books: action.payload,
                error: null 
            }
        case ActionType.GET_BOOK_FAIL:
            return {
                loading: false,
                error: action.payload,
                books: []
            }
        default: 
            return state;
    }
}

export default booksReducer;