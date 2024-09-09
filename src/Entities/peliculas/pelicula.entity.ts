import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Director} from '../directores/director.entity';

@Entity('Peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  anio: number;

  @Column()
  directorId: number;

  @Column()
  genero: string;

  @Column()
  actoresPrincipales: string;

  @Column()
  fechaEstreno: Date;

  @Column()
  rating: number;

  @Column()
  precio: number;

  @OneToMany(() => Director, (director) => director.peliculas, {onDelete:'CASCADE'})
  director: Director;
}
