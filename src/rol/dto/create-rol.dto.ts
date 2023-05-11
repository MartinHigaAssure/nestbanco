import { User } from "src/users/entities/user.entity";

export class CreateRolDto {
    name: string;
    description: string;
    user: User;
}
