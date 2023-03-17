"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const Customer_1 = require("../../output/entities/Customer");
const OrderDetail_1 = require("../../output/entities/OrderDetail");
const Orders_1 = require("../../output/entities/Orders");
const Product_1 = require("../../output/entities/Product");
const ProductCategory_1 = require("../../output/entities/ProductCategory");
const User_1 = require("../../output/entities/User");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const local_guard_1 = require("../auth/local/local.guard");
const controller_controller_1 = require("../controller/controller.controller");
const service_service_1 = require("../service/service.service");
const upload_middleware_1 = require("../upload/upload.middleware");
const user_controller_1 = require("../user/user.controller");
const user_service_1 = require("../user/user.service");
let ModuleModule = class ModuleModule {
};
ModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Customer_1.Customer,
                OrderDetail_1.OrderDetail,
                Orders_1.Orders,
                Product_1.Product,
                ProductCategory_1.ProductCategory,
                User_1.User,
            ]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '2d' },
            }),
            platform_express_1.MulterModule.register(upload_middleware_1.UploadMiddleware.MulterOption()),
        ],
        providers: [user_service_1.UserService, local_guard_1.LocalGuard, jwt_guard_1.JwtGuard, service_service_1.ProductService, service_service_1.CustomerService, service_service_1.OrderService],
        controllers: [user_controller_1.UserController, controller_controller_1.ProductController, controller_controller_1.CustomerController, controller_controller_1.OrderController],
        exports: [user_service_1.UserService],
    })
], ModuleModule);
exports.ModuleModule = ModuleModule;
//# sourceMappingURL=module.module.js.map