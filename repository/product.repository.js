import AppError from '../utils/appError.js'; 
import db from '../utils/dbConnect.js';

export const saveProduct = async (data) => {
    // const { product_id, barcode	, product_name, last_updated_user, last_updated_date, status } = data;
     try {
    //     const product = await db.query(
    //         'INSERT INTO product (product_id, barcode	, product_name, last_updated_user, last_updated_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    //         [product_id, barcode	, product_name, last_updated_user, last_updated_date, status]
    //     );
        return "Hi";
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const getProducts = async () => {
    try {
        return "Hi";

    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const geProductsById = async (id) => {
    try {
        return "Hi";

    } catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const updateProduct = async (data) => {
    // const { product_id, barcode	, product_name, last_updated_user, last_updated_date, status } = data;
    try {
        // const product = await db.query(
        //     'UPDATE product SET product_id = $1, barcode	 = $2, product_name = $3, last_updated_user = $4, last_updated_date = $5, status = $6 WHERE product_id = $7 RETURNING *',
        //     [product_id, barcode	, product_name, last_updated_user, last_updated_date, status, id]
        // );
        return "Hi";
    }catch (err) {
        throw new AppError(err.message, 500);
    }
}

export const deleteProduct = async (id) => {
    try {
        // const product = await db.query(
        //     'DELETE FROM product WHERE product_id = $1 RETURNING *',
        //     [id]
        // );
        return "Hi";
    } catch (err) {
        throw new AppError(err.message, 500);
    }
}
