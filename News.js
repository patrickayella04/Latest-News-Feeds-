class NewAPI {
    constructor() {
        this.client_key = 'apiKey=96be6c62fa434d2494c30a0044bde03c'
    }

    async getNews() {
        const articleResponse = await fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-29&sortBy=publishedAt&${this.client_key}`);

        const bitcoin = await articleResponse.json();

        return bitcoin;
    }

    
}