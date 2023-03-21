import { User } from "../../../domain/entites/user";

export interface UserRepository {
    getAllUserRepository(): Promise<User[]>;
    // getUserByIdRepository(id: string): Promise<User | undefined>;
}
