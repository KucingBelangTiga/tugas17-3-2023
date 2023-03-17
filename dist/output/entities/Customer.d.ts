import { User } from "./User";
export declare class Customer {
    customerId: number;
    firstname: string | null;
    lastname: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    user: User;
}
