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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
//function that will create a new product in DB
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    // creating a product using product model.
    const newProduct = product_model_1.ProductModel.create(product);
    return newProduct;
});
//this function will get all products from the db
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
// this function will find a product based on id
const getAProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ id });
    return result;
});
// this function will update the product
const updateProductInDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.ProductModel.findByIdAndUpdate(id, productData);
    }
    catch (error) {
        throw new Error('Failed to update product');
    }
});
// this function will delete a product from DB
const deleteProductInDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield product_model_1.ProductModel.findByIdAndDelete(id, productData);
    }
    catch (error) {
        throw new Error('Failed to update product');
    }
});
// this function search the db to find match
const searchProductInDB = (search) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.ProductModel.find({
        $or: [
            { name: search },
            { description: search },
            { category: search },
            { tags: search },
        ],
    });
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getAProductFromDB,
    updateProductInDB,
    deleteProductInDB,
    searchProductInDB,
};
