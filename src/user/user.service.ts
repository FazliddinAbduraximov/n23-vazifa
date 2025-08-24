import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IUser } from "./entity/user.entity";
import { CreateUserDto } from "./dto/user-create.dto";
import { v4 } from "uuid";
import { UpdateUserDto } from "./dto/user-update.dto";

@Injectable()
export class UserService{
    private userData:IUser[]=[];

    async create(createUserDto:CreateUserDto){
        this.userData.push({id:v4(),...createUserDto});
        return {
            statusCode:201,
            message:'success',
            data:this.userData.at(-1)
        }
    }

    async findAll(){
        return {
            statusCode:200,
            message:'success',
            data:this.userData
        }
    }

    async findById(id:string){
        const data=this.userData.find((e:IUser)=>e.id===id)
        if(!data){
            throw new HttpException('Not found',HttpStatus.NOT_FOUND);
        }
        return {
            statusCode:200,
            message:'success',
            data
        }
    }

    async update(id:string,updateUserDto:UpdateUserDto){
        const index=this.userData.findIndex((e:IUser)=>e.id===id);
        if(index===-1){
            throw new HttpException('Not found',HttpStatus.NOT_FOUND);
        }
        this.userData[index]={...this.userData[index],...updateUserDto};
        return {
            statusCode:200,
            message:'success',
            data:this.userData[index]
        }
    }

    async deleted(id:string){
        const index=this.userData.findIndex((e:IUser)=>e.id===id);
        if(index===-1){
            throw new HttpException('Not found',HttpStatus.NOT_FOUND);
        }
        this.userData.splice(index,1);
        return {
            statusCode:200,
            message:'success',
            data:{}
        }
    }
}