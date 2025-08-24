import { PartialType } from "@nestjs/mapped-types";
import { CreateCountryDto } from "./create-country.dto";

export class UpdateCounrtyDto extends PartialType(CreateCountryDto){}