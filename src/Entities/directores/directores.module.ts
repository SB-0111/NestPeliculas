import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { Type } from 'class-transformer';
import { Director } from './director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  providers: [DirectoresService],
  exports: [TypeOrmModule],
  controllers: [DirectoresController],

})
export class DirectoresModule {}
