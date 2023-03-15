import express, { Express, Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

interface ProductAPI {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    image: string;
}

interface Product {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    price: string;
    imageUrl: string;
}

class ProductMapper {
    static toProduct(productAPI: ProductAPI): Product {
        const { id, title, subtitle, description, price, image } = productAPI;

        return { id, title, subtitle, description, price, imageUrl: image };
    }

    static toProductList(productList: ProductAPI[]): Product[] {
        return productList.map(product => ProductMapper.toProduct(product));
    }
}

async function getAllProducts(req: Request, res: Response) {
    try {
        const response = await axios.get("https://my-json-server.typicode.com/thotsaphon-bank/e-commerce/products");
        const productAPI = response.data;
        const productList = ProductMapper.toProductList(productAPI);

        res.json(productList);
    } catch (error) {
        console.log("error")
    }
}

function getProductById(req: Request, res: Response) {
    const userId = req.params.userId;
    res.send(`This is Product id = ${userId}`);
}

router.get("/v1/products", getAllProducts);
router.post("/v1/products/:userId", getProductById);

module.exports = router;
