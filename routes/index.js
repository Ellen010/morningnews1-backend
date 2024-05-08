var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/articles', (req, res) => {
        fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${TMDB_API_KEY}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok') {
            res.json({ articles: data.articles });
          } else {
            res.json({ articles: [] });
          }
        });
    });
    
    module.exports = router;


