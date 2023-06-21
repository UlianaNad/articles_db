const by_topic = document.querySelector('.by_topic');

const renderTopics = async() => {
    const result = await axios.get('/topics');
    const topics = result.data;
    //console.log(topics);
    let html = '';
    topics.forEach((topic) => {
        html += `<option value="${topic._id}">${topic.title}</option> `;
    })
    by_topic.innerHTML = html;
}
renderTopics();



