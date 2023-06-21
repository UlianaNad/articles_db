const title = document.querySelector('.title');

const form = document.querySelector(".form");

const renderAuthors = async() => {
    const authorsList = await axios.get('/authors_list');
    const authors = authorsList.data;
    let html = '';

    authors.forEach((author) => {
        html +=`<option value="${author._id}">${author.name}  ${author.surname}</option>`;
        document.querySelector('.author').innerHTML = html;
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


const render_topic = async() => {
    const topicsList = await axios.get('/topics');
    const topics = topicsList.data;
    let html = '';

    topics.forEach((topic) => {
        html +=`<option value="${topic._id}">${topic.title}</option>`;
        document.querySelector('.topic').innerHTML = html;
    })
}
render_topic()


let html_list = '';

const renderList = async () => {
    const articlesList = await axios.get('/articles_list');
    const list = articlesList.data;
    list.forEach((item) => {
        //console.log(item)
        html_list +=`<br><a href="http://localhost:5000/article/${item._id}" class="title">${item.title}</a><br>`;
        document.querySelector('.list').innerHTML = html_list;
    });
}

document.addEventListener('DOMContentLoaded', () =>{
    renderList();
})
const render_by_topic = () => {
    by_topic.addEventListener('change',async (ev) => {
        const by_topic = ev.target.value;
        console.log(by_topic)
        const run = async() => {
            const result = await axios.post('/articles_list_by_topic', {by_topic});
            const by_topics = result.data;
            console.log(by_topics)
            by_topics.forEach((item) => {
                console.log(item)
                html_list +=`<br><a href="http://localhost:5000/article/${item._id}" class="title">${item.title}</a><br>`;
                document.querySelector('.list').innerHTML = html_list;
            });
        }
        html_list = '';
        run();
    })
}
render_by_topic();

document.querySelector(".all_articles").addEventListener('click', (ev) => {
    ev.preventDefault();
    html_list = '';
    renderList();
})




