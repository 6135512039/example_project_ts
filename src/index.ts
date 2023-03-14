import { RecordWithTtl } from 'dns';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

interface User {
    id: number;
    name: string;
    role: string;
}

interface Product {
    id: number;
    name: string;
    price: string;
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

const products: Product[] = [
    {
        id: 1,
        name: "milk",
        price: "10"
    },
    {
        id: 2,
        name: "water",
        price: "5"
    },
    {
        id: 3,
        name: "green tea",
        price: "15"
    }
];

function getAllUsers(req: Request, res: Response) {
    res.json(users);
}

function getUserById(req: Request, res: Response) {
    const userId = req.params.userId;
    res.send(`hello ${userId}`);
}

function getAllProducts(req: Request, res: Response) {
    res.json(products);
}

app.get("/user/v1/users", getAllUsers);
app.post("/user/v1/users/:userId", getUserById);
app.get("/product/v1/products", getAllProducts);

app.listen(PORT, () => {
    console.log(`Running on Server PORT ${PORT}`);
});
