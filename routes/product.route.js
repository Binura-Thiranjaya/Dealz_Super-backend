import express from 'express';
import {
    saveProductController,
    getProductsController,
    getProductByIdController,
    deleteProductController,
    updateProductController,
    // getProductByNameController
} from '../controllers/index.js'

const productRouter = express.Router();

productRouter.post('/add', saveProductController);
productRouter.get('/', getProductsController);
productRouter.get('/:id', getProductByIdController);
// productRouter.get('/name', getProductByNameController);
productRouter.delete('/delete/:id', deleteProductController);
productRouter.put('/update/:id', updateProductController);


export default productRouter;
