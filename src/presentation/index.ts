import express from 'express';
import { ProductRouter } from './routes/product_route';
import { UserRouter } from './routes/user_route';

const app = express();
const productRouter = new ProductRouter();
const userRouter = new UserRouter();

app.use(express.json());

app.use('/products', productRouter.getRouter());
app.use('/users', userRouter.getRouter());

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
