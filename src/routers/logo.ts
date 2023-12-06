import Router from 'express';
import logoController from "../controllers/logo.controller";
const logoRouter:Router = new Router;

logoRouter.get('/', logoController.getAll);
logoRouter.get('/:id', logoController.getOne);

export default logoRouter;