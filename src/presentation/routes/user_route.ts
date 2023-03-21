import express, {Router} from 'express';
import { UserController } from '../controllers/user_controller';

export class UserRouter {
    private readonly router: Router;
    private readonly userController: UserController;

    constructor() {
        this.router = express.Router();
        this.userController = new UserController();
        this.setupRouter();
    }

    private setupRouter(): void {
        this.router.get('/v1/users', this.userController.getAllUserController.bind(this.userController));
        this.router.post('/v1/users/:id', this.userController.getUserByIdController.bind(this.userController));
    }

    public getRouter(): Router {
        return this.router;
    }
}
