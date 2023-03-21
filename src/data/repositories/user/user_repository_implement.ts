import axios from "axios";
import { User } from "../../../domain/entites/user";
import { UserRepository } from "./user_repository";

const users: User[] = [
    {
        id: 1,
        name: "Tang",
        role: "Mobile Developer"
    },
    {
        id: 2,
        name: "Ong",
        role: "Package QA"
    },
    {
        id: 3,
        name: "Sing",
        role: "Package QA"
    },
];

export class UserRepositoryImplement implements UserRepository {
    async getAllUserRepository(): Promise<User[]> {
        return users;
    }

    // async getUserByIdRepository(id: string): Promise<User | undefined> {
    //     const user = users.find((user) => user.id == parseInt(id));
        
    //     return user;
    // }

}
