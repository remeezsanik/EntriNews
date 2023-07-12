import {NEWS_LIST_SUCCESS, NEWS_LIST_FAIL } from './../actions/NewsListAction';
import { Action } from 'redux';

interface INewsState {
    news: NewsData[],
    error?: any,
    lang?:string,
    page?:number
}
interface IActionWithPayload<T> extends Action<string> {
    type: string;
    payload?: T;
    error?: boolean;
    lang?: string;
    page?:number;
}

const initialState: INewsState = {
    news: [],
    lang: "",
    page:0,
}

export const newsReducer = (state = initialState, action:IActionWithPayload<INewsState>) => {
    switch (action.type) {
        case NEWS_LIST_SUCCESS:
            return { news: action.payload, lang: action.lang, page: action.page}
        case NEWS_LIST_FAIL:
            return { error: action.error }
        default:
            return state;
    }
}