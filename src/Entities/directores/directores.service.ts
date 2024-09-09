import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './director.entity';
import { DirectorCreateDto } from '../../dto/directorCreate.dto';
import { DirectorUpdateDto } from '../../dto/directorUpdate';

@Injectable()
export class DirectoresService {
    constructor(
        @InjectRepository(Director)
        private directorRepository: Repository<Director>,
    ) {}
    
    async create(createDirectorDto: DirectorCreateDto): Promise<Director> {
    const director = this.directorRepository.create(createDirectorDto);
        return this.directorRepository.save(createDirectorDto);
    }

    async findAll(): Promise<Director[]> {
        return this.directorRepository.find();
    }
    findOne(id: number): Promise<Director> {
        return this.directorRepository.findOne({
            where: { id },
            relations: ['peliculas'],
        });
    }
    async update(id: number, updateDirectorDto: DirectorUpdateDto): Promise<Director> {
        const director = await this.directorRepository.preload({
            id: id,
            ...updateDirectorDto,
        });
        if (!director) {
            throw new NotFoundException(`Director #${id} not found`);
        }
        return this.directorRepository.save(director);
    }

    async remove (id: number): Promise<Director> {
        const director = await this.findOne(id);
        return this.directorRepository.remove(director);
    }
}
