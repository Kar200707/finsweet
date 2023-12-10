import Router from 'express';
import subController from "../controllers/subscribe.controller";
const subRouter:Router = new Router;

subRouter.post('/', subController.create);
subRouter.get('/', subController.getAll);
export default subRouter;