import Router from 'express';
import postController from "../controllers/post.controller";
const postRouter:Router = new Router;

postRouter.post('/', postController.create);
postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getOne);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.delete);

export default postRouter;