import { Book } from '../reducers/index';

export enum ActionType {
    GET_BOOK_PENDING = 'GET_BOOK_PENDING',
    GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS',
    GET_BOOK_FAIL = 'GET_BOOK_FAIL'
}

interface actionPending {
    type: ActionType.GET_BOOK_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_BOOK_SUCCESS;
    payload: Book[];
}

interface actionFail {
    type: ActionType.GET_BOOK_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;