"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
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
function getAllProducts(req, res) {
    res.json(products);
}
function getProductById(req, res) {
    const userId = req.params.userId;
    res.send(`This is Product id = ${userId}`);
}
router.get("/v1/products", getAllProducts);
router.post("/v1/products/:userId", getProductById);
module.exports = router;
