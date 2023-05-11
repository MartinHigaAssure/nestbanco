import { CuentasBancaria } from 'src/cuentas-bancarias/entities/cuentas-bancaria.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'pago' })
export class Pago extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    referencia : string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => CuentasBancaria, origen => origen)
    origen: CuentasBancaria;

    @Column({ type: 'numeric'})
    monto : number;

}
