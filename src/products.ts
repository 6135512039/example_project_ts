import express, {Express, Request, Response} from 'express';

const router = express.Router();

interface Product {
    id: number;
    name: string;
    price: string;
}

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

function getAllProducts(req: Request, res: Response) {
    res.json(products);
}

function getProductById(req: Request, res: Response) {
    const userId = req.params.userId;
    res.send(`This is Product id = ${userId}`);
}

router.get("/v1/products", getAllProducts);
router.post("/v1/products/:userId", getProductById);

module.exports = router;
