import { BaseService } from './base.service';

interface User {
  id: string;
  email: string;
}

interface Session {
  token: string;
  user: User;
}
class SessionsService extends BaseService<Session> {
  API_URL = 'sessions';
}

export default new SessionsService();
