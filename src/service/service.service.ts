import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { User } from 'output/entities/User';
import { Repository } from 'typeorm';

function dateNow() {
    return (new Date()).toISOString().split('T')[0];
}

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private serviceRepo: Repository<Product>,
        @InjectRepository(ProductCategory)
        private serviceRepo2: Repository<ProductCategory>,
    ) { }

    public async findAll() {
        return await this.serviceRepo.find();
    }

    public async findOne(id: number) {
        return await this.serviceRepo.findOne({ where: { productId: id } });
    }

    public async Create(
        name: string,
        description: string,
        category_id: ProductCategory,
        price: string,
        name_detail: string,
        description_detail: string
    ) {
        try {
            if (name !== 'NULL') {
                await this.serviceRepo.save({
                    name: name,
                    description: description,
                    category: category_id,
                    price: price,
                    createdAt: dateNow(),
                });
            } else if (name_detail !== 'NULL') {
                await this.serviceRepo2.save({
                    name: name_detail,
                    description: description_detail,
                    createdAt: dateNow(),
                });
                // await this.serviceRepo2.query(
                //   'DELETE FROM public.product WHERE product_id = (SELECT Max(product_id) FROM public.product)',
                // );
            }
            return;
        } catch (error) {
            return error.message;
        }
    }

    public async Update(product_id: number, name: string, description: string) {
        try {
            await this.serviceRepo.update(product_id, {
                name: name,
                description: description,
                updatedAt: dateNow(),
            });
            return 'data berhasil diubah';
        } catch (error) {
            return error.message;
        }
    }

    public async Update2(category_id: number, name: string, description: string) {
        try {
            await this.serviceRepo2.update(category_id, {
                name: name,
                description: description,
                updatedAt: dateNow(),
            });
            return 'data product category berhasil diubah';
        } catch (error) {
            return error.message;
        }
    }

    public async Delete(product_id: number) {
        try {
            await this.serviceRepo.delete(product_id);
            return 'data dari list product telah berhasil dihapus';
        } catch (error) {
            return error.message;
        }
    }

    public async Delete2(category_id: number) {
        try {
            await this.serviceRepo2.delete(category_id);
            return 'data dari list kategori product telah berhasil dihapus';
        } catch (error) {
            return error.message;
        }
    }

    public async getSpecific() {
        try {
            const query = await this.serviceRepo2.query(
                'SELECT * FROM product JOIN product_category ON product_category.category_id = product.category_id',
            );
            return query;
        } catch (error) {
            return error.message;
        }
    }

    public async Upload(file, id: number) {
        try {
            const product = await this.serviceRepo.update(id, {
                image: file.originalname,
            });
            return product;
        } catch (error) {
            return error.message;
        }
    }
}

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer) private serviceRepo: Repository<Customer>,
    ) { }

    public async findAll() {
        return await this.serviceRepo.find();
    }

    public async findOne(id: number) {
        return await this.serviceRepo.findOne({ where: { customerId: id } });
    }

    public async Create(
        name: string,
        lname: string,
        user_id: User
    ) {
        try {
            await this.serviceRepo.save({
                firstname: name,
                lastname: lname,
                user: user_id,
                createdAt: dateNow(),
            });
            return;
        } catch (error) {
            return error.message;
        }
    }

    public async Update(customer_id: number, name: string, lname: string,) {
        try {
            await this.serviceRepo.update(customer_id, {
                firstname: name,
                lastname: lname,
                updatedAt: dateNow(),
            });
            return 'data customer berhasil diubah';
        } catch (error) {
            return error.message;
        }
    }

    public async Delete(customer_id: number) {
        try {
            await this.serviceRepo.delete(customer_id);
            return 'data dari list customer telah berhasil dihapus';
        } catch (error) {
            return error.message;
        }
    }

    public async getSpecific() {
        try {
            const query = await this.serviceRepo.query(
                'SELECT * FROM customer JOIN user ON user.user_id = customer.user_id',
            );
            return query;
        } catch (error) {
            return error.message;
        }
    }
}

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Orders) private serviceRepo: Repository<Orders>,
        @InjectRepository(OrderDetail) private serviceRepo2: Repository<OrderDetail>,
    ) { }

    public async findAll() {
        return await this.serviceRepo.find();
    }

    public async findAll2() {
        return await this.serviceRepo2.find();
    }

    public async findOne(id: number) {
        return await this.serviceRepo.findOne({ where: { orderId: id } });
    }

    public async Create(
        user_id: User,
        totalproduct: number,
        totalprice: number,
    ) {
        try {
            await this.serviceRepo.save({
                user: user_id,
                totalproduct: totalproduct,
                totalprice: totalprice,
                createdAt: dateNow(),
            });
            return;
        } catch (error) {
            return error.message;
        }
    }

    public async Create2(
        order_id: Orders,
        product_id: Product,
        quantity: number,
    ) {
        try {
            await this.serviceRepo2.save({
                order: order_id,
                product: product_id,
                quantity: quantity,
                createdAt: dateNow(),
            });
            return;
        } catch (error) {
            return error.message;
        }
    }

    public async Update(order_id: number, totalproduct: number, totalprice: number,) {
        try {
            await this.serviceRepo.update(order_id, {
                totalproduct: totalproduct,
                totalprice: totalprice,
                updatedAt: dateNow(),
            });
            return 'data order berhasil diubah';
        } catch (error) {
            return error.message;
        }
    }

    public async Update2(order_detail_id: number, quantity: number) {
        try {
            await this.serviceRepo2.update(order_detail_id, {
                quantity: quantity,
                updatedAt: dateNow(),
            });
            return 'data order detail berhasil diubah';
        } catch (error) {
            return error.message;
        }
    }

    public async Delete(order_id: number) {
        try {
            await this.serviceRepo.delete(order_id);
            return 'data dari list order telah berhasil dihapus';
        } catch (error) {
            return error.message;
        }
    }

    public async Delete2(order_detail_id: number) {
        try {
            await this.serviceRepo2.delete(order_detail_id);
            return 'data dari list kategori product telah berhasil dihapus';
        } catch (error) {
            return error.message;
        }
    }

    public async getSpecific() {
        try {
            const query = await this.serviceRepo.query(
                'SELECT * FROM orders JOIN orders ON orders.order_id=order_detail.order_id JOIN user ON user.user_id=orders.user_id JOIN customer ON customer.user_id=user.user_id',
            );
            return query;
        } catch (error) {
            return error.message;
        }
    }
}
