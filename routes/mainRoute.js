const express = require('express');
const articleModel = require('../models/articleModel');
const authorModel = require('../models/authorModel');
const topicModel = require('../models/topicModel');

const router = express.Router();

// topicModel.create({
//   title:'sport'
// })

router.get('/add_article', (req,res) => {
    res.render("add_article.ejs");   
});
router.post('/add_article',  (req,res) => {
  const article = new articleModel(req.body);
  article.save().then((article) => {
    res.status(200).send(article)
  }); 
});


router.get('/articles_list', async (req,res) => {
  const articles_list = await articleModel.find();
  //console.log(articles_list)
  res.json(articles_list);   
});

router.get('/article/:id', async(req,res) => {
  res.render('show_article', {articleId: req.params.id});
});

router.get('/article_asd/:id', async(req,res) => {
  //console.log(req.params.id)
  const article = await articleModel
  .findOne({_id: req.params.id})
  .populate('author');
  res.json(article);
});

router.get('/add_author', async (req,res) => {
  res.render('add_author');   
});
router.post('/add_author',  (req,res) => {
  const author = new authorModel(req.body);
  author.save().then((author) => {
    res.status(200).send(author)
  }); 
});
router.post('/articles_list_by_topic', async (req,res) => {
  const top = JSON.parse(JSON.stringify(req.body.by_topic));
  // console.log(top)
  const by_topic = await articleModel
  .find({topic: top})
  .populate('topic')
  //console.log(by_topic)
  res.send(by_topic)
});

router.get('/authors_list', async (req,res) => {
  const authors_list = await authorModel.find();
  //console.log(articles_list)

  
  res.json(authors_list);   
});



router.get('/author/:id', async(req,res) => {
  const authors_articles = await articleModel.find({author:req.params.id});
  //console.log(authors_articles)
  res.render('show_authors_articles', {authorId: req.params.id, articles:authors_articles});
});

router.get('/author_id/:id', async(req,res) => {
  //console.log(req.params.id)
  const author = await authorModel.findOne({_id: req.params.id});
  // const authors_topic = await authorModel
  //   .findOne({_id: req.params.id})
  //   .populate({
  //     path: 'topic',
  //     model: articleModel,
  //     populate: {
  //       path: "title",
  //       model: topicModel,
  //       select: "title"
  //     }
  //   }).exec();

  //   console.log(authors_topic)
    
  res.json(author); 
});

router.get('/topics', async(req,res) => {
  const topics = await topicModel.find();
  res.json( topics);
});

router.get('/by_topic', async(req,res) => {
  
  res.render('filter_by_topic');
});


module.exports = router; 