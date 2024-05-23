"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/product/product.routes");
const order_routes_1 = require("./app/modules/order/order.routes");
const app = (0, express_1.default)();
const port = 3000;
//Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', product_routes_1.ProductRoutes);
app.use('/api/orders', order_routes_1.OrderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route Not Found',
    });
});
exports.default = app;
