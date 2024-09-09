import { Body, Controller, Delete, Get, Param, Put,Post } from '@nestjs/common';

import { DirectorCreateDto } from '../../dto/directorCreate.dto';
import { DirectorUpdateDto } from '../../dto/directorUpdate';

import { PeliculasService } from './peliculas.service';
import { Pelicula } from './pelicula.entity';
import { PeliculaCreateDto } from '../../dto/peliculaCreate.dto';
import { PeliculaUpdateDto } from 'src/dto/peliculaUpdate.dto';

@Controller('api/peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}
   
  @Post()
  create(@Body() createPeliculaDto: PeliculaCreateDto): Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaDto);
  }
  @Get()
  findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pelicula> {
    return this.peliculasService.findOneBy(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePeliculaDto: PeliculaUpdateDto) {
    return this.peliculasService.update(+id, updatePeliculaDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculasService.remove(+id);
  }
  

  @Get('director/directorId')
  findPeliculasByDirectorId(@Param('directorId') directorId: string): Promise<Pelicula[]> {
    return this.peliculasService.findPeliculasByDirectorId(+directorId);
  }


}
