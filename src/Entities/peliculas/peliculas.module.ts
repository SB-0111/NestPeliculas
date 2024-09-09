import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './pelicula.entity';
import { Director } from '../directores/director.entity';
import { Type } from 'class-transformer';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula, Director])],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}
