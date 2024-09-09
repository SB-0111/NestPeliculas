import { IsNotEmpty,IsString,IsDateString, IsOptional } from "class-validator";

export class DirectorUpdateDto {
    @IsOptional()
    @IsString()
    nombre: string;
    @IsOptional()
    @IsString()
    nacionalidad: string;
    @IsOptional()
    @IsDateString()
    fechaNacimiento: Date;
    @IsOptional()
    @IsString()
    biografia: string;

}
