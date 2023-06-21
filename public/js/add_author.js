console.log('works');

const form =document.querySelector(".form");
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    console.log([...formData])
    const run = async () => {
        const result = await axios.post('/add_author',  formData);
        console.log(result);
    }
    run();
    renderList();
})

const renderList = async () => {
    const authorsList = await axios.get('/authors_list');
    const authors = authorsList.data;
    let html = '';
    authors.forEach((author) => {
        //console.log(item)
        html +=`<br><a href="http://localhost:5000/author/${author._id}" class="title">${author.name}  ${author.surname}</a><br>
                <div>Теми статтей автора: </div>`;
        document.querySelector('.list').innerHTML = html;
    });
    

}
renderList();