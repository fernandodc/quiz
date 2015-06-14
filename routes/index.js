var express = require('express');
var quizController=require('../controllers/quiz_controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'quiz' });
});


router.get('/author', function(req, res, next) {
  res.render('author', { author: 'Fernando De Caminos' });
});



router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
//router.get('/author', quizController.author);

module.exports = router;
