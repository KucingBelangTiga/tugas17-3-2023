import { Orders } from "./Orders";
import { Product } from "./Product";
export declare class OrderDetail {
    ordetId: number;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    order: Orders;
    product: Product;
}
