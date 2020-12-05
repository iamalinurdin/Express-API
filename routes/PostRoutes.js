const express = require('express');
const Post = require('../models/PostModel');

const router = express.Router();

router.get('/', async (request, response) => {
  const posts = await Post.find();

  response.json(posts);
});

router.post('/', (request, response) => {
  const post = new Post({
    title: request.body.title,
    description: request.body.description,
  });

  post.save()
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      console.log(error.responseText);
    })
});

router.get('/:id', async (request, response) => {
  const id   = request.params.id;
  const post = await Post.findById(id);

  response.json(post);
});

router.patch('/:id', async (request, response) => {
  const update = await Post.updateOne({
    _id: request.params.id,
  }, {$set: {
    title: request.body.title,
    description: request.body.description,
  }});

  response.json(update);
});

router.delete('/:id', async (request, response) => {
  const remove = await Post.remove({
    _id: request.params.id,
  });

  response.json(remove);
});

module.exports = router;