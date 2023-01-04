import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';
import { ReturnUserDto } from '../dto/return-user.dto';
import { ReturnListUserDto } from '../dto/return-list-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }

  @Get()
  async findAll(): Promise<ReturnListUserDto> {
    const users = await this.usersService.findAll();
    return {
      users,
      message: ''
    }
  }
}