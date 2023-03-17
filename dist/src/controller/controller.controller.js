"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = exports.OrderController = exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const service_service_1 = require("../service/service.service");
const platform_express_1 = require("@nestjs/platform-express");
const ProductCategory_1 = require("../../output/entities/ProductCategory");
const User_1 = require("../../output/entities/User");
const Orders_1 = require("../../output/entities/Orders");
const Product_1 = require("../../output/entities/Product");
let ProductController = class ProductController {
    constructor(Services) {
        this.Services = Services;
    }
    async getSpecific() {
        return await this.Services.getSpecific();
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name, description, category_id, price, name_detail, description_detail) {
        return await this.Services.Create(name, description, category_id, price, name_detail, description_detail);
    }
    async Update(product_id, name, description) {
        return await this.Services.Update(product_id, name, description);
    }
    async Update2(category_id, name, description) {
        return await this.Services.Update2(category_id, name, description);
    }
    async Delete(product_id) {
        return await this.Services.Delete(product_id);
    }
    async Delete2(category_id) {
        return await this.Services.Delete2(category_id);
    }
    async upload(file, id) {
        return await this.Services.Upload(file, id);
    }
};
__decorate([
    (0, common_1.Get)('/getwithcategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getSpecific", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('description')),
    __param(2, (0, common_1.Body)('category_id')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('name_detail')),
    __param(5, (0, common_1.Body)('description_detail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, ProductCategory_1.ProductCategory, String, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':product_id'),
    __param(0, (0, common_1.Param)('product_id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Update", null);
__decorate([
    (0, common_1.Put)('/category/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Update2", null);
__decorate([
    (0, common_1.Delete)(':product_id'),
    __param(0, (0, common_1.Param)('product_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Delete", null);
__decorate([
    (0, common_1.Delete)('/category/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "Delete2", null);
__decorate([
    (0, common_1.Post)('/upload/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "upload", null);
ProductController = __decorate([
    (0, common_1.Controller)('/product'),
    __metadata("design:paramtypes", [service_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
let OrderController = class OrderController {
    constructor(Services) {
        this.Services = Services;
    }
    async getSpecific() {
        return await this.Services.getSpecific();
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getAll2() {
        return await this.Services.findAll2();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(user_id, totalproduct, totalprice) {
        return await this.Services.Create(user_id, totalproduct, totalprice);
    }
    async Create2(order_id, product_id, quantity) {
        return await this.Services.Create2(order_id, product_id, quantity);
    }
    async Update(order_id, totalproduct, totalprice) {
        return await this.Services.Update(order_id, totalproduct, totalprice);
    }
    async Update2(order_detail_id, quantity) {
        return await this.Services.Update2(order_detail_id, quantity);
    }
    async Delete(order_id) {
        return await this.Services.Delete(order_id);
    }
    async Delete2(order_detail_id) {
        return await this.Services.Delete2(order_detail_id);
    }
};
__decorate([
    (0, common_1.Get)('/getalldetail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getSpecific", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/detail'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAll2", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('user_id')),
    __param(1, (0, common_1.Body)('totalproduct')),
    __param(2, (0, common_1.Body)('totalprice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Number, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Create", null);
__decorate([
    (0, common_1.Post)('/detail/'),
    __param(0, (0, common_1.Body)('order_id')),
    __param(1, (0, common_1.Body)('product_id')),
    __param(2, (0, common_1.Body)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Orders_1.Orders, Product_1.Product, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Create2", null);
__decorate([
    (0, common_1.Put)(':order_id'),
    __param(0, (0, common_1.Param)('order_id')),
    __param(1, (0, common_1.Body)('totalproduct')),
    __param(2, (0, common_1.Body)('totalprice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Update", null);
__decorate([
    (0, common_1.Put)('/detail/:order_detail_id'),
    __param(0, (0, common_1.Param)('order_detail_id')),
    __param(1, (0, common_1.Body)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Update2", null);
__decorate([
    (0, common_1.Delete)(':order_id'),
    __param(0, (0, common_1.Param)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Delete", null);
__decorate([
    (0, common_1.Delete)('/detail/:order_detail_id'),
    __param(0, (0, common_1.Param)('order_detail_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "Delete2", null);
OrderController = __decorate([
    (0, common_1.Controller)('/order'),
    __metadata("design:paramtypes", [service_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
let CustomerController = class CustomerController {
    constructor(Services) {
        this.Services = Services;
    }
    async getSpecific() {
        return await this.Services.getSpecific();
    }
    async getAll() {
        return await this.Services.findAll();
    }
    async getOne(id) {
        return await this.Services.findOne(id);
    }
    async Create(name, lname, user_id) {
        return await this.Services.Create(name, lname, user_id);
    }
    async Update(customer_id, name, lname) {
        return await this.Services.Update(customer_id, name, lname);
    }
    async Delete(customer_id) {
        return await this.Services.Delete(customer_id);
    }
};
__decorate([
    (0, common_1.Get)('/getwithuser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getSpecific", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('firstname')),
    __param(1, (0, common_1.Body)('lastname')),
    __param(2, (0, common_1.Body)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, User_1.User]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "Create", null);
__decorate([
    (0, common_1.Put)(':customer_id'),
    __param(0, (0, common_1.Param)('customer_id')),
    __param(1, (0, common_1.Body)('firstname')),
    __param(2, (0, common_1.Body)('lastname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':customer_id'),
    __param(0, (0, common_1.Param)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "Delete", null);
CustomerController = __decorate([
    (0, common_1.Controller)('/customer'),
    __metadata("design:paramtypes", [service_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=controller.controller.js.map