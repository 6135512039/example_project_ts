import axios from "axios";
import { Product } from "../../../domain/entites/product";
import { ProductRepository } from "./product_repository";
import { ProductMapper } from "./mappers/product_mapper";

const ProductUrl = require("../../remote/remote")

export class ProductRepositoryImplement implements ProductRepository {
    async getAllProductRepository(): Promise<Product[]> {
        const response = await axios.get(ProductUrl);
        const productAPI = response.data;
        const productList = ProductMapper.toProductList(productAPI);

        return productList;
    }

    // async getProductByIdRepository(_id: string): Promise<Product | undefined> {
    //     const response = await axios.get(ProductUrl);
    //     const productAPI = response.data;
    //     const product = ProductMapper.toProduct(productAPI);
        
    //     return product;
    // }
}
