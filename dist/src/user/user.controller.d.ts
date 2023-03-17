import { UserService } from './user.service';
export declare class UserController {
    private authService;
    constructor(authService: UserService);
    signup(fields: any): Promise<any>;
    signin(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<any>;
}
