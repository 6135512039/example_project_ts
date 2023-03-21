import { Product } from "../entites/product";
import { ProductRepositoryImplement } from "../../data/repositories/product/product_repository_implement";

export class ProductUseCase {
    private readonly productRepository: ProductRepositoryImplement;

    constructor() {
        this.productRepository = new ProductRepositoryImplement();
    }
    
    async getAllProductUseCase(): Promise<Product[]> {
        return this.productRepository.getAllProductRepository();
    }

    // async getProductByIdUseCase(id: string): Promise<Product | undefined> {
    //     return this.productRepository.getProductByIdRepository(id);
    // }
}
