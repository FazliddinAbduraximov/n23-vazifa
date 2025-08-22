import { Injectable } from "@nestjs/common";
import { IUser } from "./entity/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    private users: IUser[] = [];

    async create(createUserDto: CreateUserDto) {
        this.users.push({id:Date.now() ,...createUserDto});
        return this.users;
    }

    async findAll(){
        console.log(this.users)
        return this.users
    }
    async findById(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      return `User with id ${id} not found`;
    }
    return user;
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      return `User with id ${id} not found`;
    }
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  async delete(id: number) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      return `User with id ${id} not found`;
    }
    const deleted = this.users[index];
    this.users.splice(index, 1);
    return {};
  }
}