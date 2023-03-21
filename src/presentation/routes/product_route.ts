import express, { Router } from 'express';
import { ProductController } from '../controllers/product_controller';

export class ProductRouter {
  private readonly router: Router;
  private readonly productController: ProductController;

  constructor() {
    this.router = express.Router();
    this.productController = new ProductController();
    this.setupRouter();
  }

  private setupRouter(): void {
    this.router.get('/v1/products', this.productController.getAllProductsController.bind(this.productController));
    this.router.get('/v1/products/:id', this.productController.getProductByIdController.bind(this.productController));
  }

  public getRouter(): Router {
    return this.router;
  }
}
