const title = document.querySelector('.title');

const form = document.querySelector(".form");

const renderAuthors = async() => {
    const authorsList = await axios.get('/authors_list');
    const authors = authorsList.data;
    let html = '';

    authors.forEach((author) => {
        html +=`<option value="${author._id}">${author.name}  ${author.surname}</option>`;
        document.querySelector('select').innerHTML = html;
    })
}
renderAuthors()

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    //console.log([...formData])
    const run = async () => {
        const result = await axios.post('/add_article',  formData);
        console.log(result);
    }
    run();
    renderList();
})


const renderList = async () => {
    const articlesList = await axios.get('/articles_list');
    const list = articlesList.data;
    let html = '';
    list.forEach((item) => {
        //console.log(item)
        html +=`<br><a href="http://localhost:5000/article/${item._id}" class="title">${item.title}</a><br>`;
        document.querySelector('.list').innerHTML = html;
    });
    

}
renderList();