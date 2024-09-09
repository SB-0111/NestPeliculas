import { IsNegative,IsNotEmpty,IsString,IsOptional } from "class-validator";

export class PeliculaUpdateDto {
    @IsOptional()
    @IsString()
    titulo: string;
    @IsOptional()
    @IsString()
    genero: string;
    @IsOptional()
    @IsNegative()
    anio: number;
    @IsOptional()
    @IsNegative()
    rating: number;
    @IsOptional()
    @IsNegative()
    directorId: number;
}