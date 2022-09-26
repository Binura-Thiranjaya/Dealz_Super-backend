import AppError from '../utils/appError.js'; 
import db from '../utils/dbConnect.js';

export const saveProduct = async (data) => {
        const sqlInsert = "INSERT INTO product (product_id, barcode	, product_name, last_updated_user,status)  VALUES (?,?,?,?,?)";
        const { product_id, barcode	, product_name, last_updated_user, status } = data;
        const result = await db.query(sqlInsert, [product_id, barcode	, product_name, last_updated_user, status]);
        return Promise.resolve(result).catch((err) => {
            throw new AppError(err.message, 500);
        }
    );
}

export const getProducts = async () => {
    const sqlSelect = "SELECT * FROM product";
    const res=await db.query(sqlSelect);
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

export const getProductsById = async (id) => {
    const sqlSelect = "SELECT * FROM product WHERE id = ?";
    const res = await db.query(sqlSelect, [id])
    return Promise.resolve(res[0]).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

export const updateProduct = async (id,data) => {
    const sqlUpdate = "UPDATE product SET barcode = ?, product_name = ?, last_updated_user = ?, status = ? WHERE product_id = ?";
    const { barcode	, product_name, last_updated_user, status } = data;
    const result = await db.query(sqlUpdate, [barcode	, product_name, last_updated_user, status, id]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

export const deleteProduct = async (id) => {
    const sqlDelete = "DELETE FROM product WHERE id = ?";
    const res = await db.query(sqlDelete, [id])
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
