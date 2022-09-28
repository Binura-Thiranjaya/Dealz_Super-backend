import AppError from '../utils/appError.js';
import db from '../utils/dbConnect.js';

//--------------------------------------Add new product--------------------------------------------------
export const saveProduct = async (data) => {
    const sqlInsert = "INSERT INTO product (product_id, barcode	, product_name, last_updated_user,status)  VALUES (?,?,?,?,?)";
    const { product_id, barcode, product_name, last_updated_user, status } = data;
    const result = await db.query(sqlInsert, [product_id, barcode, product_name, last_updated_user, status]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError(err.message, 500);
    }
    );
}
//--------------------------------------Get all products--------------------------------------------------
export const getProducts = async () => {
    //test comment
    const sqlSelect = "SELECT * FROM product";
    const res = await db.query(sqlSelect);
    console.log(res);
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
//--------------------------------------Get by ID--------------------------------------------------
export const getProductsById = async (id) => {
    const sqlSelect = "SELECT * FROM product WHERE id = ?";
    const res = await db.query(sqlSelect, [id])
    return Promise.resolve(res[0]).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
//--------------------------------------Get by PName--------------------------------------------------
// export const getProductsByName = async (name) => {
//     const sqlSelect = "SELECT * FROM product WHERE product_name = ?";
//     const res = await db.query(sqlSelect, [name])
//     return Promise.resolve(res[0]).catch((err) => {
//         throw new AppError("Internal Failure", 500);
//     });
// }
//--------------------------------------Get by PID---------------------------------------------------

export const updateProduct = async (id,data) => {
    const sqlUpdate = "UPDATE product SET product_id = ?,barcode = ?, product_name = ?, last_updated_user = ?, status = ? WHERE id = ?";
    const {product_id, barcode, product_name, last_updated_user, status } = data;
    const result = await db.query(sqlUpdate, [product_id,barcode, product_name, last_updated_user, status, id]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

// export const updateProduct = async (id, data) => {
//     console.log({ id, data });
//     try {
//         const sqlUpdate = "UPDATE product SET product_id = ?,barcode = ?, product_name = ?, last_updated_user = ?, status = ? WHERE id = ?";
//         
//         const result = await db.query(sqlUpdate, [data.product_id, data.barcode, data.product_name, data.last_updated_user, data.status, 4]);
//         console.log({result});
//         return Promise.resolve(result).catch((err) => {
//             throw new AppError("Internal Failure", 500);
//         });
//     } catch (error) {
//         console.log(error);
//         throw new AppError(error, 500);
//     }

// }

// export const deleteProduct = async (id) => {
//     const sqlDelete = "DELETE FROM product WHERE id = ?";
//     const res = await db.query(sqlDelete, [id])
//     return Promise.resolve(res).catch((err) => {
//         throw new AppError("Internal Failure", 500);
//     });
// }

export const deleteProduct = async (id) => {
    const sqlDelete = "UPDATE product SET status = ? WHERE id = ?";
    const res = await db.query(sqlDelete, ['deactive', id])
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
