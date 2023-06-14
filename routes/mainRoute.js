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

  res.json(author);
});




module.exports = router; 