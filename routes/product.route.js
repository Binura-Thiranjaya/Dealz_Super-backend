import express from 'express';
import {
    saveProductController,
    getProductsController,
    getProductByIdController,
    deleteProductController,
    updateProductController
} from '../controllers/index.js'

const productRouter = express.Router();

productRouter.post('/add', saveProductController);
productRouter.get('/', getProductsController);
productRouter.get('/:id', getProductByIdController);
productRouter.delete('/delete/:id', deleteProductController);
productRouter.put('/update/:id', updateProductController);


export default vendorRouter;
