import Router from 'express';
import privacyPolicyController from "../controllers/privacyPolicy.controller";
const privacyPolicyRouter:Router = new Router;

privacyPolicyRouter.get('/', privacyPolicyController.getAll);
privacyPolicyRouter.post('/', privacyPolicyController.create);
privacyPolicyRouter.put('/', privacyPolicyController.update);

export default privacyPolicyRouter;