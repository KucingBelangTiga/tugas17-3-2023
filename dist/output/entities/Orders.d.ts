import { OrderDetail } from "./OrderDetail";
import { User } from "./User";
export declare class Orders {
    orderId: number;
    totalproduct: number | null;
    totalprice: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    orderDetails: OrderDetail[];
    user: User;
}
