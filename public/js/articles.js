console.log('works');

const title = document.querySelector('.title');

const form = document.querySelector(".form");

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    console.log([...formData])
    const run = async () => {
        const result = await axios.post('/article',  formData);
        console.log(result);
    }
    run();

    // .then(res => console.log(res))
    // .catch(err => console.log(err))
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