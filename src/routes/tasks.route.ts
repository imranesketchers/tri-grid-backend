import { Router } from 'express';
import TasksController from '@controllers/tasks.controller';
import { CreateTaskDto } from '@dtos/tasks.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class TasksRoute implements Routes {
  public path = '/api/tasks';
  public router = Router();
  public tasksController = new TasksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tasksController.getTasks);
    this.router.get(`${this.path}/config`, this.tasksController.getTasksTableConfig);
    this.router.get(`${this.path}/:id(\\d+)`, this.tasksController.getTaskById);
    this.router.post(`${this.path}/$batch`, validationMiddleware(CreateTaskDto, 'body'), this.tasksController.bulkTask);
    this.router.post(`${this.path}`, this.tasksController.createTask);
    // this.router.post(`${this.path}`, validationMiddleware(CreateTaskDto, 'body'), this.tasksController.createTask);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateTaskDto, 'body', true), this.tasksController.updateTask);
    this.router.delete(`${this.path}/:id(\\d+)`, this.tasksController.deleteTask);
  }
}

export default TasksRoute;
