import { BaseService } from './base.service';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UsersService extends BaseService<User> {
  readonly API_URL = 'users';
}

export default new UsersService();
