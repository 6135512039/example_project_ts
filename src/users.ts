import express, {Express, Request, Response} from 'express';

const router = express.Router();

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

router.get("/v1/users", getAllUsers);
router.post("/v1/users/:userId", getUserById);

module.exports = router;
