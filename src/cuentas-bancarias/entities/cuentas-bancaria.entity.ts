import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Pago } from 'src/pagos/entities/pago.entity';
import { Transaccione } from 'src/transaciones/entities/transacione.entity';
//import { Transaccione } from 'src/transacciones/entities/transaccione.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'cuentabancaria' })
export class CuentasBancaria extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    numero: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    saldo : string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    tipo : string;

    @ManyToOne(() => Cliente, cliente => cliente.cuentasBancarias)
    cliente: Cliente;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Transaccione, origen => origen.origen)
    origen: Transaccione[];

    @OneToMany(() => Transaccione, destino => destino.destino)
    destino: Transaccione[];

    @OneToMany(() => Pago, pago => pago.origen)
    pago: Pago[];
}
