import { Body, Controller, Delete, Get, Param, Put,Post } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { DirectorCreateDto } from '../../dto/directorCreate.dto';
import { DirectorUpdateDto } from '../../dto/directorUpdate';
import { Director } from './director.entity';

@Controller('directores')
export class DirectoresController {
  constructor(private readonly directoresService: DirectoresService) {}

  @Post()
  create(@Body() createDirectorDto: DirectorCreateDto) {
    return this.directoresService.create(createDirectorDto);
  }
  @Get()
  findAll(): Promise<Director[]> {
    return this.directoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Director> {
    return this.directoresService.findOne(+id);

  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateDirectorDto: DirectorUpdateDto) {
    return this.directoresService.update(+id, updateDirectorDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.directoresService.remove(+id);
  }

}
