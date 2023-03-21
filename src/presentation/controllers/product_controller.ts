import { Request, Response } from 'express';
import { ProductUseCase } from '../../domain/usecases/product_usecase';

export class ProductController {
  private readonly productUseCase: ProductUseCase;
  
  constructor() {
    this.productUseCase = new ProductUseCase();
  }

  async getAllProductsController(res: Response): Promise<void> {
    try {
      const products = await this.productUseCase.getAllProductUseCase();

      res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async getProductByIdController(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      res.send(`This is product = ${id}`)
    } catch (error) {
        console.log(error);
    }
  }
}
