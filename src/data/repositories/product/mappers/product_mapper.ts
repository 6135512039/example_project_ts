import { Product } from "../../../../domain/entites/product";
import { ProductAPI } from "../responses/product_api_response";

export class ProductMapper {
    static toProduct(productAPI: ProductAPI): Product {
        const { id, title, subtitle, description, price, image } = productAPI;

        return { id, title, subtitle, description, price, imageUrl: image };
    }

    static toProductList(productList: ProductAPI[]): Product[] {
        return productList.map(product => ProductMapper.toProduct(product));
    }
}
