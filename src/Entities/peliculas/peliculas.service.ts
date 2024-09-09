import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Director } from 'src/Entities/directores/director.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PeliculaCreateDto } from '../../dto/peliculaCreate.dto';
import { Pelicula } from './pelicula.entity';
import { dir } from 'console';

@Injectable()
export class PeliculasService {
    findOneBy: any;
  findPeliculasByDirectorId: any;
  remove: any;
  update: any;
    
    constructor(
        @InjectRepository(Director)
        private directorRepository: Repository<Director>,
        
        @InjectRepository(Pelicula)
        private peliculaRepository: Repository<Pelicula>,
    ) {}

    async create(createPeliculaDto: PeliculaCreateDto): Promise<Pelicula> {
        const pelicula = await this.peliculaRepository.findOneBy({ id: createPeliculaDto.directorId });
        if (!Director) {
            throw new NotFoundException(`Director not found`);
        }
        return this.peliculaRepository.save(pelicula);
    }

    async findAll(): Promise<Pelicula[]> {
        return this.peliculaRepository.find();
    }



}
