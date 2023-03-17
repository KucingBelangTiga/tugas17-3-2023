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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Customer = class Customer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "customer_id" }),
    __metadata("design:type", Number)
], Customer.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "firstname", nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lastname", nullable: true }),
    __metadata("design:type", String)
], Customer.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "createdAt", nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updatedAt", nullable: true }),
    __metadata("design:type", Date)
], Customer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.customers),
    (0, typeorm_1.JoinColumn)([{ name: "user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", User_1.User)
], Customer.prototype, "user", void 0);
Customer = __decorate([
    (0, typeorm_1.Index)("customer_pkey", ["customerId"], { unique: true }),
    (0, typeorm_1.Entity)("customer", { schema: "public" })
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map