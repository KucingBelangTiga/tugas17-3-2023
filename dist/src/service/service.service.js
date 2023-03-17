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
exports.OrderService = exports.CustomerService = exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Customer_1 = require("../../output/entities/Customer");
const OrderDetail_1 = require("../../output/entities/OrderDetail");
const Orders_1 = require("../../output/entities/Orders");
const Product_1 = require("../../output/entities/Product");
const ProductCategory_1 = require("../../output/entities/ProductCategory");
const typeorm_2 = require("typeorm");
function dateNow() {
    return (new Date()).toISOString().split('T')[0];
}
let ProductService = class ProductService {
    constructor(serviceRepo, serviceRepo2) {
        this.serviceRepo = serviceRepo;
        this.serviceRepo2 = serviceRepo2;
    }
    async findAll() {
        return await this.serviceRepo.find();
    }
    async findOne(id) {
        return await this.serviceRepo.findOne({ where: { productId: id } });
    }
    async Create(name, description, category_id, price, name_detail, description_detail) {
        try {
            if (name !== 'NULL') {
                await this.serviceRepo.save({
                    name: name,
                    description: description,
                    category: category_id,
                    price: price,
                    createdAt: dateNow(),
                });
            }
            else if (name_detail !== 'NULL') {
                await this.serviceRepo2.save({
                    name: name_detail,
                    description: description_detail,
                    createdAt: dateNow(),
                });
            }
            return;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(product_id, name, description) {
        try {
            await this.serviceRepo.update(product_id, {
                name: name,
                description: description,
                updatedAt: dateNow(),
            });
            return 'data berhasil diubah';
        }
        catch (error) {
            return error.message;
        }
    }
    async Update2(category_id, name, description) {
        try {
            await this.serviceRepo2.update(category_id, {
                name: name,
                description: description,
                updatedAt: dateNow(),
            });
            return 'data product category berhasil diubah';
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(product_id) {
        try {
            await this.serviceRepo.delete(product_id);
            return 'data dari list product telah berhasil dihapus';
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete2(category_id) {
        try {
            await this.serviceRepo2.delete(category_id);
            return 'data dari list kategori product telah berhasil dihapus';
        }
        catch (error) {
            return error.message;
        }
    }
    async getSpecific() {
        try {
            const query = await this.serviceRepo2.query('SELECT * FROM product JOIN product_category ON product_category.category_id = product.category_id');
            return query;
        }
        catch (error) {
            return error.message;
        }
    }
    async Upload(file, id) {
        try {
            const product = await this.serviceRepo.update(id, {
                image: file.originalname,
            });
            return product;
        }
        catch (error) {
            return error.message;
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductCategory_1.ProductCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
let CustomerService = class CustomerService {
    constructor(serviceRepo) {
        this.serviceRepo = serviceRepo;
    }
    async findAll() {
        return await this.serviceRepo.find();
    }
    async findOne(id) {
        return await this.serviceRepo.findOne({ where: { customerId: id } });
    }
    async Create(name, lname, user_id) {
        try {
            await this.serviceRepo.save({
                firstname: name,
                lastname: lname,
                user: user_id,
                createdAt: dateNow(),
            });
            return;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(customer_id, name, lname) {
        try {
            await this.serviceRepo.update(customer_id, {
                firstname: name,
                lastname: lname,
                updatedAt: dateNow(),
            });
            return 'data customer berhasil diubah';
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(customer_id) {
        try {
            await this.serviceRepo.delete(customer_id);
            return 'data dari list customer telah berhasil dihapus';
        }
        catch (error) {
            return error.message;
        }
    }
    async getSpecific() {
        try {
            const query = await this.serviceRepo.query('SELECT * FROM customer JOIN user ON user.user_id = customer.user_id');
            return query;
        }
        catch (error) {
            return error.message;
        }
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Customer_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
exports.CustomerService = CustomerService;
let OrderService = class OrderService {
    constructor(serviceRepo, serviceRepo2) {
        this.serviceRepo = serviceRepo;
        this.serviceRepo2 = serviceRepo2;
    }
    async findAll() {
        return await this.serviceRepo.find();
    }
    async findAll2() {
        return await this.serviceRepo2.find();
    }
    async findOne(id) {
        return await this.serviceRepo.findOne({ where: { orderId: id } });
    }
    async Create(user_id, totalproduct, totalprice) {
        try {
            await this.serviceRepo.save({
                user: user_id,
                totalproduct: totalproduct,
                totalprice: totalprice,
                createdAt: dateNow(),
            });
            return;
        }
        catch (error) {
            return error.message;
        }
    }
    async Create2(order_id, product_id, quantity) {
        try {
            await this.serviceRepo2.save({
                order: order_id,
                product: product_id,
                quantity: quantity,
                createdAt: dateNow(),
            });
            return;
        }
        catch (error) {
            return error.message;
        }
    }
    async Update(order_id, totalproduct, totalprice) {
        try {
            await this.serviceRepo.update(order_id, {
                totalproduct: totalproduct,
                totalprice: totalprice,
                updatedAt: dateNow(),
            });
            return 'data order berhasil diubah';
        }
        catch (error) {
            return error.message;
        }
    }
    async Update2(order_detail_id, quantity) {
        try {
            await this.serviceRepo2.update(order_detail_id, {
                quantity: quantity,
                updatedAt: dateNow(),
            });
            return 'data order detail berhasil diubah';
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete(order_id) {
        try {
            await this.serviceRepo.delete(order_id);
            return 'data dari list order telah berhasil dihapus';
        }
        catch (error) {
            return error.message;
        }
    }
    async Delete2(order_detail_id) {
        try {
            await this.serviceRepo2.delete(order_detail_id);
            return 'data dari list kategori product telah berhasil dihapus';
        }
        catch (error) {
            return error.message;
        }
    }
    async getSpecific() {
        try {
            const query = await this.serviceRepo.query('SELECT * FROM orders JOIN orders ON orders.order_id=order_detail.order_id JOIN user ON user.user_id=orders.user_id JOIN customer ON customer.user_id=user.user_id');
            return query;
        }
        catch (error) {
            return error.message;
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Orders_1.Orders)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderDetail_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=service.service.js.map