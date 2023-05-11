import { CuentasBancaria } from 'src/cuentas-bancarias/entities/cuentas-bancaria.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity, OneToOne } from 'typeorm';

@Entity({ name: 'Transaccione' })
export class Transaccione extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    numero: string;

    @Column({ type: 'numeric'})
    monto : number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    tipo : string;

    @ManyToOne(() => CuentasBancaria, origen => origen)
    origen: CuentasBancaria;

    @ManyToOne(() => CuentasBancaria, destino => destino)
    destino: CuentasBancaria;

    @Column()
    @CreateDateColumn()
    createdAt: Date;
}
