import * as express from 'express';

import EmployeeController from './employee.controller';

class EmployeeRouter {
  router: express.Router;
  private controller = EmployeeController;

  constructor() {
    this.router = express.Router();
    this.router.get('/', this.controller.getAllEmployees);
    this.router.post('/', this.controller.createAEmployee);
    this.router.delete('/', this.controller.getAllEmployees);
    this.router.put('/', this.controller.getAllEmployees);
  }
}

export default new EmployeeRouter().router;
