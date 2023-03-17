import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { User } from 'output/entities/User';
import { Repository } from 'typeorm';
export declare class ProductService {
    private serviceRepo;
    private serviceRepo2;
    constructor(serviceRepo: Repository<Product>, serviceRepo2: Repository<ProductCategory>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    Create(name: string, description: string, category_id: ProductCategory, price: string, name_detail: string, description_detail: string): Promise<any>;
    Update(product_id: number, name: string, description: string): Promise<any>;
    Update2(category_id: number, name: string, description: string): Promise<any>;
    Delete(product_id: number): Promise<any>;
    Delete2(category_id: number): Promise<any>;
    getSpecific(): Promise<any>;
    Upload(file: any, id: number): Promise<any>;
}
export declare class CustomerService {
    private serviceRepo;
    constructor(serviceRepo: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    Create(name: string, lname: string, user_id: User): Promise<any>;
    Update(customer_id: number, name: string, lname: string): Promise<any>;
    Delete(customer_id: number): Promise<any>;
    getSpecific(): Promise<any>;
}
export declare class OrderService {
    private serviceRepo;
    private serviceRepo2;
    constructor(serviceRepo: Repository<Orders>, serviceRepo2: Repository<OrderDetail>);
    findAll(): Promise<Orders[]>;
    findAll2(): Promise<OrderDetail[]>;
    findOne(id: number): Promise<Orders>;
    Create(user_id: User, totalproduct: number, totalprice: number): Promise<any>;
    Create2(order_id: Orders, product_id: Product, quantity: number): Promise<any>;
    Update(order_id: number, totalproduct: number, totalprice: number): Promise<any>;
    Update2(order_detail_id: number, quantity: number): Promise<any>;
    Delete(order_id: number): Promise<any>;
    Delete2(order_detail_id: number): Promise<any>;
    getSpecific(): Promise<any>;
}
