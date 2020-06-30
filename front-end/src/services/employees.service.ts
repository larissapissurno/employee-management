import Employee from '@/components/employee/employee.interface';
import { BaseService } from './base.service';

class EmployeesService extends BaseService<Employee> {
  readonly API_URL = 'employees';
}

export default new EmployeesService();
