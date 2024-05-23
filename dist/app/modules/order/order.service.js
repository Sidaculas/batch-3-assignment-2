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
exports.OrderServices = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrderInDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // handling errors of bonus section
    const item = yield product_model_1.ProductModel.findById(order.productId);
    if (!item) {
        throw new Error('Product not found');
    }
    // checking the quantity
    if (order.quantity > item.inventory.quantity) {
        throw new Error('Insufficient quantity available in inventory');
    }
    const newOrder = yield order_model_1.OrderModel.create(order);
    //updating after every valid order
    item.inventory.quantity -= order.quantity;
    item.inventory.inStock = item.inventory.quantity > 0;
    return newOrder;
});
// this function will get all the orders
const getAllOrdersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    return result;
});
// this function will find orders by email
const getOrderByEmailFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email });
    return result;
});
exports.OrderServices = {
    createOrderInDB,
    getAllOrdersFromDB,
    getOrderByEmailFromDB,
};
