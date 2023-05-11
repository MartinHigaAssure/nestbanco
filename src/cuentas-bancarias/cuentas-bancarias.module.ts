import { Module } from '@nestjs/common';
import { CuentasBancariasService } from './cuentas-bancarias.service';
import { CuentasBancariasController } from './cuentas-bancarias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasBancaria } from './entities/cuentas-bancaria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuentasBancaria])],
  controllers: [CuentasBancariasController],
  providers: [CuentasBancariasService],
  exports: [CuentasBancariasService],
})
export class CuentasBancariasModule {}
