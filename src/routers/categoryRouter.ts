import Router from 'express';
import Controller from "../controllers/controller";
const router:Router = new Router;

router.post('/category', Controller.create);
router.get('/category', Controller.getAll);
router.get('/category/:id', Controller.getOne);
router.put('/category/:id', Controller.update);
router.delete('/category/:id', Controller.delete);
router.get('/category?/:object', Controller.sort);

export default router;