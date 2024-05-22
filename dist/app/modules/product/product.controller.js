"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // could have call product model here and created a product.
        // rather made another file named product.service.ts to maintain reusability
        // console.log(req.body)
        const productData = req.body.products;
        const saveProduct = yield product_service_1.ProductServices.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: saveProduct,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the product.',
            error: error.message,
        });
    }
});
// getting all products from db
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: allProducts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving the product.',
            error: error.message,
        });
    }
});
// getting a product form the db
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getAProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the product.',
            error: error.message,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getAProduct,
};
