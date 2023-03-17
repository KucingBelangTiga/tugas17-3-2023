import { OrderDetail } from "./OrderDetail";
import { ProductCategory } from "./ProductCategory";
export declare class Product {
    productId: number;
    name: string | null;
    description: string | null;
    price: string | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    orderDetails: OrderDetail[];
    category: ProductCategory;
}
