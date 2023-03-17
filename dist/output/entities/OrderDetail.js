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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./Orders");
const Product_1 = require("./Product");
let OrderDetail = class OrderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "ordet_id" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "ordetId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "quantity", nullable: true }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "createdAt", nullable: true }),
    __metadata("design:type", Date)
], OrderDetail.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updatedAt", nullable: true }),
    __metadata("design:type", Date)
], OrderDetail.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Orders_1.Orders, (orders) => orders.orderDetails),
    (0, typeorm_1.JoinColumn)([{ name: "order_id", referencedColumnName: "orderId" }]),
    __metadata("design:type", Orders_1.Orders)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.orderDetails),
    (0, typeorm_1.JoinColumn)([{ name: "product_id", referencedColumnName: "productId" }]),
    __metadata("design:type", Product_1.Product)
], OrderDetail.prototype, "product", void 0);
OrderDetail = __decorate([
    (0, typeorm_1.Index)("order_detail_pkey", ["ordetId"], { unique: true }),
    (0, typeorm_1.Entity)("order_detail", { schema: "public" })
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=OrderDetail.js.map