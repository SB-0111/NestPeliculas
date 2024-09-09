import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasModule } from './Entities/peliculas/peliculas.module';
import { DirectoresModule } from './Entities/directores/directores.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'proyectoweb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PeliculasModule,
    DirectoresModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
