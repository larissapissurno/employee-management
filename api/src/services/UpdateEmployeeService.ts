import { getRepository } from 'typeorm';

import Employee from '../models/Employee';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  name: string;
  email: string;
  cpf: string;
  role: string;
  cellphone: string;
  birth_date: Date;
  admission_date: Date;
}

export default class UpdateEmployeeService {
  public async execute(request: Request): Promise<Employee> {
    const employeeRepository = getRepository(Employee);
    const {
      name,
      email,
      cpf,
      role,
      cellphone,
      birth_date,
      admission_date,
    } = request;

    const employee = await employeeRepository.findOne(request.id);

    if (!employee) {
      throw new AppError('Employee not found', 404);
    }

    employee.name = name;
    employee.email = email;
    employee.cpf = cpf;
    employee.role = role;
    employee.cellphone = cellphone;
    employee.birth_date = birth_date;
    employee.admission_date = admission_date;

    await employeeRepository.save(employee);

    return employee;
  }
}
