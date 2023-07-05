import {NEWS_LIST_SUCCESS, NEWS_LIST_FAIL } from './../actions/NewsListAction';
import { Action } from 'redux';

interface INewsState {
    news: NewsData[],
    error?: any,
}
interface IActionWithPayload<T> extends Action<string> {
    type: string;
    payload?: T;
    error?: boolean;
}

const initialState: INewsState = {
    news: [],
}

export const newsReducer = (state = initialState, action:IActionWithPayload<INewsState>) => {
    switch (action.type) {
        case NEWS_LIST_SUCCESS:
            return { news: action.payload }

        case NEWS_LIST_FAIL:
            return { news: action.error }

        default:
            return state;
    }
}