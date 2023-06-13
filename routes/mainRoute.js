const express = require('express');
 const articleModel = require('../models/articleModel');
const router = express.Router();

router.get('/article', (req,res) => {
    res.render("article.ejs");   
});


router.post('/article',  (req,res) => {
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
  console.log(req.params.id)
  const article = await articleModel.findOne({_id: req.params.id});
  res.json(article);
});



module.exports = router; 