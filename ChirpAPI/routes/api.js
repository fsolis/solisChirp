var express = require('express');
var router = express.Router();

router.use(function(req, res, next){

	if(req.method === "GET"){
		//allow get request to be access by any user.
		return next();
	}

	if(!req.isAuthenticated()){
		//user not authenticated redirect to login page
		return res.redirect('/#login');
	}

	//user authenticated, continue to next middleware
	return next();
});

router.route('/posts')

	//returns all posts
	.get(function(req,res){
		//temporary solution
		res.send({message: 'TODO: return all posts'});
	})

	.post(function(req, res){
		//temporary solution
		res.send({message: 'TODO: Create a new post'});
	});


router.route('/posts/:id')
	//return a particular post
	.get(function(req, res){
		res.send({message: 'TODO return post with ID ' + req.params.id});
	})

	//updates existing post
	.put(function(req, res){
		res.send({message: 'TODO modify post with ID ' + req.params.id});
	})

	//delete existing post
	.delete(function(req, res){
		res.send({message: 'TODO delete post with ID ' + req.params.id});
	});

module.exports = router;