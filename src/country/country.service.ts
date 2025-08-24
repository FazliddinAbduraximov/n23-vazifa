import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ICountry } from "./entity/country.entity";
import { CreateCountryDto } from "./dto/create-country.dto";
import { v4 } from "uuid";
import { UpdateCounrtyDto } from "./dto/update-country.dto";

@Injectable()
export class CountryService{
    private countryData:ICountry[]=[];

    async create(createCountryDto:CreateCountryDto){
        this.countryData.push({id:v4(), ... createCountryDto})
        return {
            statusCode:201,
            message:'success',
            data:this.countryData.at(-1)
        }
    }

    async findAll(){
        console.log('sdcsdcds')
        return {
            statusCode:200,
            message:"success",
            data:this.countryData
        }
    }
    async findById(id:string){
        const data=this.countryData.find((e:ICountry)=>e.id===id);
        if(!data){
            throw new HttpException('Id not found',HttpStatus.NOT_FOUND)
        }
        return {
            statusCode:200,
            message:"success",
            data
        }
    }

    async update(id:string,updateCounrtyDto: UpdateCounrtyDto){
        const index=this.countryData.findIndex((e:ICountry)=>e.id===id);
        if(index==-1){
            // throw new HttpException('Id not found',HttpStatus.NOT_FOUND)
            throw new NotFoundException();  ///// ichiga matin yozsa ham bolda biz bergan matinni qaytaradi
        }
        this.countryData[index]={...this.countryData[index],...updateCounrtyDto};
        return {
            statusCode:200,
            message:'success',
            data:this.countryData[index]
        }
    }

    async deleted(id:string){
        
        const index=this.countryData.findIndex((e:ICountry)=>e.id===id);
        if(index==-1){
            // throw new HttpException('Id not found',HttpStatus.NOT_FOUND)
            throw new NotFoundException();  ///// ichiga matin yozsa ham bolda biz bergan matinni qaytaradi
        }
        this.countryData.splice(index,1);
        return {
            statusCode:200,
            message:'succes',
            data:{}
        }
    }


}