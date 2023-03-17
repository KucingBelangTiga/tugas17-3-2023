import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
declare const LocalGuard_base: new (...args: any[]) => Strategy;
export declare class LocalGuard extends LocalGuard_base {
    private autService;
    constructor(autService: UserService);
    validate(username: string, password: string): Promise<{
        userId: number;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        customers: import("../../../output/entities/Customer").Customer[];
        orders: import("../../../output/entities/Orders").Orders[];
    }>;
}
export {};
