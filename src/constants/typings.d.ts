
type Categories = "general"|"business"| "entertainment"| "health"|"science"|"sports"| "technology"


type Article = {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string | null;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    }
}

type NewsData = {
    totalArticles :number;
    articles: Article[];
}