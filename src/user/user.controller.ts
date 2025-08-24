import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";

@Controller('users')
export class UserController{
    constructor(private readonly userService:UserService){}

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string){
        return this.userService.findById(id);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUserDto:UpdateUserDto){
        return this.userService.update(id,updateUserDto);
    }

    @Delete(':id')
    deleted(@Param('id') id:string){
        return this.userService.deleted(id)
    }
}