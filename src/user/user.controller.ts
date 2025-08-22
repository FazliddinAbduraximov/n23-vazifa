import { Body, Controller, Post,Get,Patch,Delete,Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { get } from "http";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }
    @Get()
    findAll(){
        return this.userService.findAll()
    }
    @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Partial<CreateUserDto>) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }


}