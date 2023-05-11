import { CuentasBancaria } from 'src/cuentas-bancarias/entities/cuentas-bancaria.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    nombre: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    direccion : string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    email : string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    telefono : string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    ci: string;

    @OneToMany(() => CuentasBancaria, cuentaBancaria => cuentaBancaria.cliente)
    cuentasBancarias: CuentasBancaria[];
}
