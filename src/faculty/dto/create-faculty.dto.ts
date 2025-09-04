import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFacultyDto {
    @ApiProperty({
        example:"Yuridiskiy"
    })
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty({example:1})
    @IsNumber()
    @IsNotEmpty()
    unversityId:number;
}
