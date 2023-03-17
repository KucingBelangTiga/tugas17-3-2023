import { CustomerService, OrderService, ProductService } from 'src/service/service.service';
import { ProductCategory } from 'output/entities/ProductCategory';
import { User } from 'output/entities/User';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
export declare class ProductController {
    private Services;
    constructor(Services: ProductService);
    getSpecific(): Promise<any>;
    getAll(): Promise<Product[]>;
    getOne(id: number): Promise<Product>;
    Create(name: string, description: string, category_id: ProductCategory, price: string, name_detail: string, description_detail: string): Promise<any>;
    Update(product_id: number, name: string, description: string): Promise<any>;
    Update2(category_id: number, name: string, description: string): Promise<any>;
    Delete(product_id: number): Promise<any>;
    Delete2(category_id: number): Promise<any>;
    upload(file: any, id: number): Promise<any>;
}
export declare class OrderController {
    private Services;
    constructor(Services: OrderService);
    getSpecific(): Promise<any>;
    getAll(): Promise<Orders[]>;
    getAll2(): Promise<import("../../output/entities/OrderDetail").OrderDetail[]>;
    getOne(id: number): Promise<Orders>;
    Create(user_id: User, totalproduct: number, totalprice: number): Promise<any>;
    Create2(order_id: Orders, product_id: Product, quantity: number): Promise<any>;
    Update(order_id: number, totalproduct: number, totalprice: number): Promise<any>;
    Update2(order_detail_id: number, quantity: number): Promise<any>;
    Delete(order_id: number): Promise<any>;
    Delete2(order_detail_id: number): Promise<any>;
}
export declare class CustomerController {
    private Services;
    constructor(Services: CustomerService);
    getSpecific(): Promise<any>;
    getAll(): Promise<import("../../output/entities/Customer").Customer[]>;
    getOne(id: number): Promise<import("../../output/entities/Customer").Customer>;
    Create(name: string, lname: string, user_id: User): Promise<any>;
    Update(customer_id: number, name: string, lname: string): Promise<any>;
    Delete(customer_id: number): Promise<any>;
}
