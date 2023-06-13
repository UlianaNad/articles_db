const getArticleById = async(articleId) => {
    try {
        const response = await axios.get(`/article_asd/${articleId}`)
        const article = response.data;
        let html = `<div class="title">${article.title}</div><br>
                <div class="text"> ${article.text} </div><br>
                <div class="author"> ${article.author} </div>`;

        document.querySelector('.article_container').innerHTML = html;
        // return article;
    } catch (err) {
        console.error(err.toJSON())
    }
} 