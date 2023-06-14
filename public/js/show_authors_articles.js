console.log('works')
const getAuthorById = async(authorId) => {
   
        const response = await axios.get(`/author_id/${authorId}`)
        const author = response.data;
        console.log(author)
        let html = ` <div class="author"> ${author.name} ${author.surname} </div>`;

        document.querySelector('.author_container').innerHTML = html;
        // return article;
    
} 