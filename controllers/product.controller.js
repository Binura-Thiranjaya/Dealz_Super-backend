import {
    saveProductService,
    getProductService,
    updateProductService,
    deleteProductService,
    getProductByIdService
} from '../services/index.js'
import Success from '../utils/success.js';

export const saveProductController = async (req,res)=>{
    try {
        const product = await saveProductService(req.body);
        res.json(Success(product,"Product saved successfully"));
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getProductsController = async (req,res)=>{
    try {
        const products = await getProductService();
        res.json(Success(products,"Products fetched successfully"));
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getProductByIdController = async (req,res)=>{
    try {
        const product = await getProductByIdService(req.params.id);
        res.json(Success(product,"Product fetched successfully"));
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteProductController = async (req,res)=>{
    try {
        const product = await deleteProductService(req.params.id);
        res.json(Success(product,"Product deleted successfully"));
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateProductController = async (req,res)=>{
    try {
        const product = await updateProductService(req.params.id,req.body);
        res.json(Success(product,"Product updated successfully"));
    } catch (err) {
        res.status(500).json(err);
    }
}