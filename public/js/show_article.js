const getArticleById = async(articleId) => {
    try {
        const response = await axios.get(`/article_asd/${articleId}`)
        const article = response.data;
        console.log(article)
        let html = `<div class="title">${article.title}</div><br>
                <div class="text"> ${article.text} </div><br>
                <a href="http://localhost:5000/author/${article.author._id}" class="author"> ${article.author.name} ${article.author.surname} </a>`;

        document.querySelector('.article_container').innerHTML = html;
        // return article;
    } catch (err) {
        console.error(err.toJSON())
    }
} 