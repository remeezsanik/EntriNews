
type Categories = "Top Headlines"|"business"| "entertainment"| "health"|"science"|"sports"| "technology"

type Article = {
    title: string;
    description: string;
    content: string;
    url?: string;
    urlToImage?:string | null;
    author?:string;
    publishedAt?: string;
    source?: {
        name: string;
        id?: string;
    }
}

type NewsData = {
    data: {
    totalResults: number;
     articles: Article[];
    }
}

type State = {
    newsReducer: INewsState;
}