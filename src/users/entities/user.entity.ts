import { Rol } from 'src/rol/entities/rol.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column({ unique: true })
  nickname: string;
  
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Rol, rol => rol.user, { cascade: true })
    rol: Rol[];
}
