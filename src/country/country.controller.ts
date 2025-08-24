import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CountryService } from "./country.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCounrtyDto } from "./dto/update-country.dto";


@Controller('country')
export class CountryController{
    constructor(private readonly countryService:CountryService){}
    
    @Post()
    create(@Body() createCountryDto:CreateCountryDto){
        return this.countryService.create(createCountryDto);
    }

    @Get()
    findAll(){
        return this.countryService.findAll();
    }
    @Get(':id')
    findById(@Param('id') id:string){
        return this.countryService.findById(id)
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updateCountriDto:UpdateCounrtyDto){
        return this.countryService.update(id,updateCountriDto)
    }
    @Delete(':id')
    deleted(@Param('id') id:string){
        return this.countryService.deleted(id)
    }

}