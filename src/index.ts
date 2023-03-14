import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

interface User {
    id: number;
    name: string;
    role: string;
}

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

function getAllUsers(req: Request, res: Response) {
    res.json(users);
}

function getUserById(req: Request, res: Response) {
    const userId = req.params.userId;
    res.send(`hello ${userId}`);
}

app.get("/user/v1/users", getAllUsers);
app.post("/user/v1/users/:userId", getUserById);

app.listen(PORT, () => {
    console.log(`Running on Server PORT ${PORT}`);
});
