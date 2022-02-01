import { NextFunction, Request, Response } from 'express';
import { CreateTaskDto } from '@dtos/tasks.dto';
import { Column, Task } from '@interfaces/tasks.interface';
import taskService from '@services/tasks.service';

class TasksController {
  public taskService = new taskService();

  public getTasksTableConfig = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const tasksTableConfig: Column[] = await this.taskService.getTasksTableConfig();

      res.status(200).json({ data: tasksTableConfig, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllTasksData: Task[] = await this.taskService.findAllTasks();
      // items: findAllTasksData,
      res.status(200).json({ count: findAllTasksData.length, result: findAllTasksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTaskById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskId = Number(req.params.id);
      const findOneTaskData: Task = await this.taskService.findTaskById(taskId);

      res.status(200).json({ data: findOneTaskData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // const taskData: CreateTaskDto = req.body;
      const taskData: Task = req.body;
      const createTaskData: Task = await this.taskService.createTask(taskData);
      console.log(req.body);
      // const findAllTasksData: Task[] = await this.taskService.findAllTasks();

      // res.status(200).json({ message: 'success' });
      // res.status(200).json({ data: findAllTasksData, message: 'findAll' });

      res.status(201).json({ data: createTaskData, message: 'created' });
    } catch (error) {
      console.log('post ree');
      next(error);
    }
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const taskId = Number(req.params.id);
      const taskData: CreateTaskDto = req.body;
      const updateTaskData: Task[] = await this.taskService.updateTask(taskId, taskData);

      res.status(200).json({ data: updateTaskData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public bulkTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // const taskData: CreateTaskDto = req.body;
      // const createTaskData: Task = await this.taskService.createTask(taskData);
      console.log(req.body);
      const findAllTasksData: Task[] = await this.taskService.findAllTasks();

      res.status(200).json(findAllTasksData);
      // res.status(200).json({ data: findAllTasksData, message: 'findAll' });

      // res.status(201).json({ data: createTaskData, message: 'created' });
    } catch (error) {
      console.log('post ree');
      next(error);
    }
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('delete body');
      const taskId = Number(req.params.id);
      console.log(taskId);
      const deleteTaskData: Task[] = await this.taskService.deleteTask(taskId);

      res.status(200).json({ data: deleteTaskData, message: 'deleted' });
    } catch (error) {
      console.log('delete error');
      next(error);
    }
  };
}

export default TasksController;
