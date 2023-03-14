import express, { Express, Request, Response } from 'express';

const app: Express = express();

interface User {
    id: string;
    name: string;
    role: string;
}

const users: User[] = [
    {
        id: '1',
        name: "Tang",
        role: "Mobile Developer"
    },
    {
        id: '2',
        name: "Ong",
        role: "Package QA"
    },
    {
        id: '3',
        name: "Sing",
        role: "Package QA"
    },
];

function getAllUsers(req: Request, res: Response) {
    res.json(users);
}

app.get("/user/v1/users", getAllUsers);

app.listen(3000, () => {
    console.log("Running on Server PORT 3000");
});
