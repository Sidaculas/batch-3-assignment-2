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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body.orders;
        const zodParsedData = order_validation_1.ZodOrderSchema.parse(orderData);
        const newOrder = yield order_service_1.OrderServices.createOrderInDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: newOrder,
        });
    }
    catch (error) {
        let errMessage = 'An error occurred while creating the order.';
        if (error.message === 'Insufficient quantity available in inventory') {
            errMessage = error.message;
        }
        else if (error.message === 'Product not found') {
            errMessage = error.message;
        }
        res.status(500).json({
            success: false,
            message: errMessage,
        });
    }
});
// this is a order getting controller
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allOrders = yield order_service_1.OrderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: allOrders,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the orders.',
            error: error.message,
        });
    }
});
//this controller will get order by email
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield order_service_1.OrderServices.getOrderByEmailFromDB(email);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving the orders.',
            error: error.message,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
