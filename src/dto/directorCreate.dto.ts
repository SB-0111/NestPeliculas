import { IsNotEmpty,IsString,IsDateString } from "class-validator";

export class DirectorCreateDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    nacionalidad: string;
    @IsNotEmpty()
    @IsDateString()
    fechaNacimiento: Date;
    @IsNotEmpty()
    @IsString()
    biografia: string;
}