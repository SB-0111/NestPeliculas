import { IsNotEmpty,IsString,IsNumber } from "class-validator";

export class PeliculaCreateDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;
    @IsNotEmpty()
    @IsString()
    genero: string;
    @IsNotEmpty()
    @IsNumber()
    anio: number;
    @IsNotEmpty()
    @IsNumber()
    rating: number;
    @IsNotEmpty()
    @IsNumber()
    directorId: number;
}