"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
class ProductMapper {
    static toProduct(productAPI) {
        const { id, title, subtitle, description, price, image } = productAPI;
        return { id, title, subtitle, description, price, imageUrl: image };
    }
    static toProductList(productList) {
        return productList.map(product => ProductMapper.toProduct(product));
    }
}
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get("https://my-json-server.typicode.com/thotsaphon-bank/e-commerce/products");
            const productAPI = response.data;
            const productList = ProductMapper.toProductList(productAPI);
            res.json(productList);
        }
        catch (error) {
            console.log("error");
        }
    });
}
function getProductById(req, res) {
    const userId = req.params.userId;
    res.send(`This is Product id = ${userId}`);
}
router.get("/v1/products", getAllProducts);
router.post("/v1/products/:userId", getProductById);
module.exports = router;
