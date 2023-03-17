import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { CustomerService, OrderService, ProductService } from 'src/service/service.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductCategory } from 'output/entities/ProductCategory';
import { User } from 'output/entities/User';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';

@Controller('/product')
export class ProductController {
    constructor(private Services: ProductService) { }

    @Get('/getwithcategory')
    public async getSpecific() {
        return await this.Services.getSpecific();
    }
    @Get()
    public async getAll() {
        return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
        return await this.Services.findOne(id);
    }
    @Post()
    public async Create(@Body('name') name: string, @Body('description') description: string, @Body('category_id') category_id: ProductCategory, @Body('price') price: string, @Body('name_detail') name_detail: string, @Body('description_detail') description_detail: string) {
        return await this.Services.Create(name, description, category_id, price, name_detail, description_detail);
    }
    @Put(':product_id')
    public async Update(@Param('product_id') product_id: number, @Body('name') name: string, @Body('name') description: string) {
        return await this.Services.Update(product_id, name, description);
    }
    @Put('/category/:category_id')
    public async Update2(@Param('category_id') category_id: number, @Body('name') name: string, @Body('description') description: string) {
        return await this.Services.Update2(category_id, name, description);
    }
    @Delete(':product_id')
    public async Delete(@Param('product_id') product_id: number) {
        return await this.Services.Delete(product_id);
    }
    @Delete('/category/:category_id')
    public async Delete2(@Param('category_id') category_id: number) {
        return await this.Services.Delete2(category_id);
    }
    @Post('/upload/:id')
    @UseInterceptors(FileInterceptor('file'))
    public async upload(@UploadedFile() file, @Param('id') id: number) {
        return await this.Services.Upload(file, id);
    }
}

@Controller('/order')
export class OrderController {
    constructor(private Services: OrderService) { }

    @Get('/getalldetail')
    public async getSpecific() {
        return await this.Services.getSpecific();
    }
    @Get()
    public async getAll() {
        return await this.Services.findAll();
    }
    @Get('/detail')
    public async getAll2() {
        return await this.Services.findAll2();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
        return await this.Services.findOne(id);
    }
    @Post()
    public async Create(@Body('user_id') user_id: User, @Body('totalproduct') totalproduct: number, @Body('totalprice') totalprice: number) {
        return await this.Services.Create(user_id, totalproduct, totalprice);
    }
    @Post('/detail/')
    public async Create2(@Body('order_id') order_id: Orders, @Body('product_id') product_id: Product, @Body('quantity') quantity: number) {
        return await this.Services.Create2(order_id, product_id, quantity);
    }
    @Put(':order_id')
    public async Update(@Param('order_id') order_id: number, @Body('totalproduct') totalproduct: number, @Body('totalprice') totalprice: number) {
        return await this.Services.Update(order_id, totalproduct, totalprice);
    }
    @Put('/detail/:order_detail_id')
    public async Update2(@Param('order_detail_id') order_detail_id: number, @Body('quantity') quantity: number) {
        return await this.Services.Update2(order_detail_id, quantity);
    }
    @Delete(':order_id')
    public async Delete(@Param('order_id') order_id: number) {
        return await this.Services.Delete(order_id);
    }
    @Delete('/detail/:order_detail_id')
    public async Delete2(@Param('order_detail_id') order_detail_id: number) {
        return await this.Services.Delete2(order_detail_id);
    }
}

@Controller('/customer')
export class CustomerController {
    constructor(private Services: CustomerService) { }

    @Get('/getwithuser')
    public async getSpecific() {
        return await this.Services.getSpecific();
    }
    @Get()
    public async getAll() {
        return await this.Services.findAll();
    }
    @Get(':id')
    public async getOne(@Param('id') id: number) {
        return await this.Services.findOne(id);
    }
    @Post()
    public async Create(@Body('firstname') name: string, @Body('lastname') lname: string, @Body('user_id') user_id: User) {
        return await this.Services.Create(name, lname, user_id);
    }
    @Put(':customer_id')
    public async Update(@Param('customer_id') customer_id: number, @Body('firstname') name: string, @Body('lastname') lname: string) {
        return await this.Services.Update(customer_id, name, lname);
    }
    @Delete(':customer_id')
    public async Delete(@Param('customer_id') customer_id: number) {
        return await this.Services.Delete(customer_id);
    }
}