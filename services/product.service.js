import {
    saveProduct,
    getProducts,
    getProductsById,
    // getProductsByName,
    updateProduct,
    deleteProduct
} from '../repository/index.js';
import AppError from '../utils/appError.js';

//--------------------------------------Add new Service--------------------------------------------------
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
//--------------------------------------Get all Service--------------------------------------------------
export const getProductService = async () => {
    try {
        const products = await getProducts();
        return products;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}
//--------------------------------------GetBY ID Service--------------------------------------------------
export const getProductByIdService = async (id) => {
    try {
        const product = await getProductsById(id);
        return product;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}
//--------------------------------------GetBY PName Service--------------------------------------------------
// export const getProductByNameService = async (name) => {
//     try {
//         const product = await getProductsByName(name);
//         return product;
//     } catch (err) {
//         throw new AppError(err.message, 500);
//     }
// }
//--------------------------------------GetBY PID Service--------------------------------------------------


export const updateProductService = async (id, data) => {
    const { product_id, barcode	, product_name, last_updated_user, status } = data;
    try {
        const product = await updateProduct(id,{
            product_id,
            barcode	,
            product_name, 
            last_updated_user, 
            status
        });
        return Promise.resolve(product);
    }catch (err) {
        throw new AppError(err.message, 500);
    }
}
export const deleteProductService = async (id) => {
    try {
        const product = await deleteProduct(id);
        return product;
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}
    
