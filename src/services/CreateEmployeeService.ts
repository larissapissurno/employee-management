import { getRepository } from 'typeorm';

import Employee from '../models/Employee';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  cpf: string;
  role: string;
  cellphone: string;
  birth_date: Date;
  admission_date: Date;
}

export default class CreateEmployeeService {
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

    const checkEmployeeExists = await employeeRepository.findOne({
      where: [{ email }, { cpf }],
    });

    if (checkEmployeeExists) {
      throw new AppError('Epoyee already exists.');
    }

    const employee = employeeRepository.create({
      name,
      email,
      cpf,
      role,
      cellphone,
      birth_date,
      admission_date,
    });

    await employeeRepository.save(employee);

    return employee;
  }
}
