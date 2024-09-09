import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pelicula } from '../peliculas/pelicula.entity';

@Entity('Directores')
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  numeroPeliculas: number;

  @OneToMany(() => Pelicula, (pelicula) => pelicula.director, {cascade: true,onDelete:'CASCADE'})
  peliculas: Pelicula[];
}