import {
    saveProduct,
    getProducts,
    geProductsById,
    updateProduct,
    deleteProduct
} from '../repository/index.js';
import AppError from '../utils/appError.js';

export const saveProductService = async (data) => {
    const { product_id, barcode	, product_name, last_updated_user, last_updated_date, status } = data;
    try {
        const product = await saveProduct({
            product_id,
            barcode	,
            product_name, 
            last_updated_user, 
            last_updated_date, 
            status
        });
        return Promise.resolve(product);
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const getProductService = async () => {
    try {
        const products = await getProducts();
        return products;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const getProductByIdService = async (id) => {
    try {
        const product = await geProductsById(id);
        return product;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const updateProductService = async (id, data) => {
    const { product_id, barcode	, product_name, last_updated_user, last_updated_date, status } = data;
    try {
        const product = await updateProduct({
            product_id,
            barcode	,
            product_name, 
            last_updated_user, 
            last_updated_date, 
            status
        });
        return Promise.resolve(product);
    }catch (err) {
        throw new AppError(err.message, 500);
    }

export const deleteProductService = async (id) => {
    try {
        const product = await deleteProduct(id);
        return product;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}
    
