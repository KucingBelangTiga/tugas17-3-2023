import { Customer } from "./Customer";
import { Orders } from "./Orders";
export declare class User {
    userId: number;
    username: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    customers: Customer[];
    orders: Orders[];
}
