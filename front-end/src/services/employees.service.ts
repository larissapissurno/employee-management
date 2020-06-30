import { BaseService } from './base.service';

interface Employee {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

class EmployeesService extends BaseService<Employee> {
  readonly API_URL = 'employees';
}

export default new EmployeesService();
