import * as express from 'express';
// import EmployeeService from './employee.service';

class EmployeeController {
  private posts: any[] = [
    {
      name: 'Muchammad Ilham',
      division: 'System Development',
      title: 'Senior'
    }
  ];
  getAllEmployees = (
    req: express.Request,
    res: express.Response
  ): void => {
    res.send(this.posts);
  };

  createAEmployee = (
    req: express.Request,
    res: express.Response
  ): void => {
    const post: any = req.body;
    this.posts.push(post);
    res.send(post);
  };
}

export default new EmployeeController();
