import { Request, Response } from "express";
import { UserUseCase } from "../../domain/usecases/user_usecase";

export class UserController {
    private readonly userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async getAllUserController(req: Request, res: Response) {
        try {
            const users = await this.userUseCase.getAllUserUseCase();

            res.json(users);
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByIdController(req: Request, res: Response) {
        try {
            const userId = req.params.id;

            res.send(`hello ${userId}`);
        } catch (error) {
            console.log(error);
        }
    }
}
