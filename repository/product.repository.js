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
