import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(email, pass) {
    const user = await this.usersService.signin(email, pass);
    if (user) {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
      //
    } else {
      throw new UnauthorizedException();
     /* return {
        access: 'denied',
      };*/
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
