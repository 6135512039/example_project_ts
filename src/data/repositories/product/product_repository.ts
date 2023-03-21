import { Product } from "../../../domain/entites/product";

export interface ProductRepository {
    getAllProductRepository(): Promise<Product[]>;
    // getProductByIdRepository(id: string): Promise<Product | undefined>
}
