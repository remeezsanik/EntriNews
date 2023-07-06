import axios from 'axios';

//action types
export const NEWS_LIST_SUCCESS = 'NEWS_LIST_SUCCESS';
export const NEWS_LIST_FAIL = 'NEWS_LIST_FAIL';

interface Lang{
    lang?:string
}


export const getNews: NewsData | any = (lang:Lang) => async (dispatch: any) => {
    try {
        const {data}: NewsData = await axios.get(`https://newsapi.org/v2/everything?q=all&language=${lang}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        dispatch({
            type: NEWS_LIST_SUCCESS, payload: data.articles, lang: lang
        })
    } catch (error) {
        dispatch({
            type: NEWS_LIST_FAIL, errormessage: error
        })
    }
}
