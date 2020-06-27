import { getRepository } from 'typeorm';

import Employee from '../models/Employee';
import AppError from '../errors/AppError';

export default class DeleteEmployeeService {
  public async execute(id: string): Promise<void> {
    const employeeRepository = getRepository(Employee);

    const employee = await employeeRepository.findOne(id);

    if (!employee) {
      throw new AppError('Employee not found', 404);
    }

    employeeRepository.delete(id);
  }
}
