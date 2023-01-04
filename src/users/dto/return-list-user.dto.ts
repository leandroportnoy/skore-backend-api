import { User } from '../user.entity';

export class ReturnListUserDto {
  users: Array<User>;
  message: string;
}