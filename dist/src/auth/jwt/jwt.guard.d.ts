import { Strategy } from 'passport-jwt';
declare const JwtGuard_base: new (...args: any[]) => Strategy;
export declare class JwtGuard extends JwtGuard_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
