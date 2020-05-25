const express = require('express')
const routes = express.Router()

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
const likeController = require("./controllers/likeController")
const auth = require('./middlewares/auth')

routes.post("/users", userController.store);
routes.post("/auth", userController.signIn)


routes.get("/posts", auth, postController.index);
routes.post("/posts", auth, postController.store);
routes.delete("/posts/:id", auth, postController.destroy);
routes.put("/posts/:id", auth, postController.update);

routes.post("/posts/likes/:id", auth, likeController.store)

module.exports = routes;