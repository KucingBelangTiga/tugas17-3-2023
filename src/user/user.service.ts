import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'output/entities/User';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const Salt = 10;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService: JwtService,
    ) { }

    public async signup(fields: any) {
        try {
            const hashPassword = await Bcrypt.hash(fields.password, Salt);
            const user = await this.userRepo.save({
                username: fields.username,
                password: hashPassword,
            });
            const { password, ...result } = user;
            return result;
        } catch (error) {
            return error.message;
        }
    }

    public async validateUser(username: string, pass: string) {
        const user = await this.userRepo.findOne({
            where: [{ username: username }],
        });
        const compare = await Bcrypt.compare(pass, user.password);

        if (compare) {
            const { password, ...result } = user;
            return result;
        }
    }

    public async login(user: any) {
        const payload = {
            username: user.username,
            id: user.userId,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
