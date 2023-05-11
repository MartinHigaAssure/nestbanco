import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RolModule } from './rol/rol.module';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasBancariasModule } from './cuentas-bancarias/cuentas-bancarias.module';
import { PagosModule } from './pagos/pagos.module';
import { TransacionesModule } from './transaciones/transaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '601232',
      database: 'banco',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    RolModule,
    ClientesModule,
    CuentasBancariasModule,
    PagosModule,
    TransacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
