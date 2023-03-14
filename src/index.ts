import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

const usersRouter = require("./users");
const productsRouter = require("./products");

app.use("/user", usersRouter);
app.use("/product", productsRouter);

app.listen(PORT, () => {
    console.log(`Running on Server PORT ${PORT}`);
});
