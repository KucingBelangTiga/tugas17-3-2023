import { User } from 'output/entities/User';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    signup(fields: any): Promise<any>;
    validateUser(username: string, pass: string): Promise<{
        userId: number;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        customers: import("../../output/entities/Customer").Customer[];
        orders: import("../../output/entities/Orders").Orders[];
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
