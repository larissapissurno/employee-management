import { Router } from 'express';
import { getRepository } from 'typeorm';

import Employee from '../models/Employee';
import CreateEmployeeService from '../services/CreateEmployeeService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const employeeRouter = Router();

employeeRouter.use(ensureAuthenticated);

employeeRouter.get('/', async (request, response) => {
  const employeeRepository = getRepository(Employee);
  const employees = await employeeRepository.find();

  return response.json(employees);
});

employeeRouter.get('/:id', async (request, response) => {
  return response.json({ getById: true });
});

employeeRouter.post('/', async (request, response) => {
  const createEmployee = new CreateEmployeeService();

  const employee = await createEmployee.execute(request.body);

  return response.json(employee);
});

employeeRouter.put('/:id', async (request, response) => {
  return response.json({ put: true });
});

employeeRouter.delete('/:id', async (request, response) => {
  return response.json({ delete: true });
});

export default employeeRouter;
