import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { User } from 'output/entities/User';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { LocalGuard } from 'src/auth/local/local.guard';
import { CustomerController, OrderController, ProductController } from 'src/controller/controller.controller';
import { CustomerService, OrderService, ProductService } from 'src/service/service.service';
import { UploadMiddleware } from 'src/upload/upload.middleware';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Customer,
            OrderDetail,
            Orders,
            Product,
            ProductCategory,
            User,
        ]),
        PassportModule,
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '2d' },
        }),
        MulterModule.register(UploadMiddleware.MulterOption()),
    ],
    providers: [UserService, LocalGuard, JwtGuard, ProductService, CustomerService, OrderService],
    controllers: [UserController, ProductController, CustomerController, OrderController],
    exports: [UserService],
})
export class ModuleModule { }
