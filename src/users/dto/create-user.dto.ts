import { Rol } from "src/rol/entities/rol.entity";

export class CreateUserDto {
    password: string;
    email: string;
    full_name: string;
    nickname: string;
    rol: Rol[];
}
