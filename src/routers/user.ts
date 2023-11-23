import Router from 'express';
import userController from "../controllers/user.controller";
const userRouter:Router = new Router;

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getOne);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;