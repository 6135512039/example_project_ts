"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
const users = [
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
const products = [
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
function getAllUsers(req, res) {
    res.json(users);
}
function getUserById(req, res) {
    const userId = req.params.userId;
    res.send(`hello ${userId}`);
}
function getAllProducts(req, res) {
    res.json(products);
}
app.get("/user/v1/users", getAllUsers);
app.post("/user/v1/users/:userId", getUserById);
app.get("/product/v1/products", getAllProducts);
app.listen(PORT, () => {
    console.log(`Running on Server PORT ${PORT}`);
});
