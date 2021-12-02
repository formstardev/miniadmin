import { combineReducers } from 'redux';
import booksReducer from './index';

const reducers = combineReducers({
    books: booksReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;