import { User } from "../entites/user";
import { UserRepositoryImplement } from "../../data/repositories/user/user_repository_implement";

export class UserUseCase {
    private readonly userRepository: UserRepositoryImplement;

    constructor() {
        this.userRepository = new UserRepositoryImplement();
    }
    
    async getAllUserUseCase(): Promise<User[]> {
        return this.userRepository.getAllUserRepository();
    }

    // async getUserByIdUseCase(id: string): Promise<User | undefined> {
    //     return this.userRepository.getUserByIdRepository(id);
    // }
}
