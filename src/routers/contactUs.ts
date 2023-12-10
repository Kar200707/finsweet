import Router from 'express';
import contactUsController from "../controllers/contactUs.controller";
const contactUsRouter:Router = new Router;

contactUsRouter.post('/', contactUsController.create);
contactUsRouter.get('/', contactUsController.getAll);

export default contactUsRouter;