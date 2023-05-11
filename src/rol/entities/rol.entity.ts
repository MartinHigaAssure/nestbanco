import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'rol' })
export class Rol extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.rol)
    @JoinColumn({ name: 'user' })
    user: User;

    


}
