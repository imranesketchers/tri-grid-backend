import { CreateTaskDto } from '@dtos/tasks.dto';
import { HttpException } from '@exceptions/HttpException';
import { Column, Task } from '@interfaces/tasks.interface';
import taskModel from '@models/tasks.model';
import taskConfigModel from '@models/tasks-config.model';
import { isEmpty } from '@utils/util';

class TaskService {
  public tasks = taskModel;
  public tasksTableConfig = taskConfigModel;

  // constructor() {
  //   this.read_tasks_file();
  // }

  public async getTasksTableConfig(): Promise<Column[]> {
    const tableConfig: Column[] = this.tasksTableConfig;
    return tableConfig;
  }

  public async findAllTasks(): Promise<Task[]> {
    const tasks: Task[] = this.tasks;
    return tasks;
  }

  public async read_tasks_file() {
    const fs = require('fs');
    fs.readFile(
      'database/tasks.json',
      'utf8',
      // callback function that is called when reading file is done
      function (err, data) {
        if (err) throw err;
        // data is a buffer containing file content
        this.tasks = JSON.parse(data);
      },
    );
  }

  public async findTaskById(taskId: number): Promise<Task> {
    const findTask: Task = this.tasks.find(task => task.id === taskId);
    if (!findTask) throw new HttpException(409, 'Task not found.');

    return findTask;
  }

  public async createTask(taskData: Task): Promise<Task> {
    // public async createTask(taskData: CreateTaskDto): Promise<Task> {
    if (isEmpty(taskData)) throw new HttpException(400, "You're not taskData");

    const taskID = this.tasks.length + 2;

    const findTask: Task = this.tasks.find(task => task.taskID === taskID);
    if (findTask) throw new HttpException(409, `Your task ${taskData.taskID} already exists`);

    const createTaskData: Task = { ...taskData, taskID: taskID };
    this.tasks = [...this.tasks, createTaskData];

    return createTaskData;
  }

  public async updateTask(taskId: number, taskData: CreateTaskDto): Promise<Task[]> {
    if (isEmpty(taskData)) throw new HttpException(400, "You're not TaskData");

    const findTask: Task = this.tasks.find(task => task.taskID === taskId);
    if (!findTask) throw new HttpException(409, 'Task not found.');

    const updateTaskData: Task[] = this.tasks.map((task: Task) => {
      if (task.taskID === findTask.taskID) task = { taskID: taskId, ...taskData };
      return task;
    });

    return updateTaskData;
  }

  public async deleteTask(taskId: number): Promise<Task[]> {
    const findTask: Task = this.tasks.find(task => task.taskID === taskId);
    if (!findTask) throw new HttpException(409, 'Task not found.');

    const deleteTaskData: Task[] = this.tasks.filter(task => task.id !== findTask.id);
    return deleteTaskData;
  }

  public async generate_tasks_db_file(): Promise<void> {
    const virtualData: any[] = [];
    let parent = -1;
    const crew = 'Crew';
    const names: string[] = [
      'VINET',
      'TOMSP',
      'HANAR',
      'VICTE',
      'SUPRD',
      'HANAR',
      'CHOPS',
      'RICSU',
      'WELLI',
      'HILAA',
      'ERNSH',
      'CENTC',
      'OTTIK',
      'QUEDE',
      'RATTC',
      'ERNSH',
      'FOLKO',
      'BLONP',
      'WARTH',
      'FRANK',
      'GROSR',
      'WHITC',
      'WARTH',
      'SPLIR',
      'RATTC',
      'QUICK',
      'VINET',
      'MAGAA',
      'TORTU',
      'MORGK',
      'BERGS',
      'LEHMS',
      'BERGS',
      'ROMEY',
      'ROMEY',
      'LILAS',
      'LEHMS',
      'QUICK',
      'QUICK',
      'RICAR',
      'REGGC',
      'BSBEV',
      'COMMI',
      'QUEDE',
      'TRADH',
      'TORTU',
      'RATTC',
      'VINET',
      'LILAS',
      'BLONP',
      'HUNGO',
      'RICAR',
      'MAGAA',
      'WANDK',
      'SUPRD',
      'GODOS',
      'TORTU',
      'OLDWO',
      'ROMEY',
      'LONEP',
      'ANATR',
      'HUNGO',
      'THEBI',
      'DUMON',
      'WANDK',
      'QUICK',
      'RATTC',
      'ISLAT',
      'RATTC',
      'LONEP',
      'ISLAT',
      'TORTU',
      'WARTH',
      'ISLAT',
      'PERIC',
      'KOENE',
      'SAVEA',
      'KOENE',
      'BOLID',
      'FOLKO',
      'FURIB',
      'SPLIR',
      'LILAS',
      'BONAP',
      'MEREP',
      'WARTH',
      'VICTE',
      'HUNGO',
      'PRINI',
      'FRANK',
      'OLDWO',
      'MEREP',
      'BONAP',
      'SIMOB',
      'FRANK',
      'LEHMS',
      'WHITC',
      'QUICK',
      'RATTC',
      'FAMIA',
    ];
    for (let i = 0; i < 50000; i++) {
      if (i % 5 === 0) {
        parent = i;
      }
      if (i % 5 !== 0) {
        const num: number = isNaN((virtualData.length % parent) - 1) ? 0 : (virtualData.length % parent) - 1;
        virtualData[num][crew].push({
          TaskID: i + 1,
          FIELD1: names[Math.floor(Math.random() * names.length)],
          FIELD2: 1967 + (i % 10),
          FIELD3: Math.floor(Math.random() * 200),
          FIELD4: Math.floor(Math.random() * 100),
          FIELD5: Math.floor(Math.random() * 2000),
          FIELD6: Math.floor(Math.random() * 1000),
          FIELD7: Math.floor(Math.random() * 100),
          FIELD8: Math.floor(Math.random() * 10),
          FIELD9: Math.floor(Math.random() * 10),
          FIELD10: Math.floor(Math.random() * 100),
          FIELD11: Math.floor(Math.random() * 100),
          FIELD12: Math.floor(Math.random() * 1000),
          FIELD13: Math.floor(Math.random() * 10),
          FIELD14: Math.floor(Math.random() * 10),
          FIELD15: Math.floor(Math.random() * 1000),
          FIELD16: Math.floor(Math.random() * 200),
          FIELD17: Math.floor(Math.random() * 300),
          FIELD18: Math.floor(Math.random() * 400),
          FIELD19: Math.floor(Math.random() * 500),
          FIELD20: Math.floor(Math.random() * 700),
          FIELD21: Math.floor(Math.random() * 800),
          FIELD22: Math.floor(Math.random() * 1000),
          FIELD23: Math.floor(Math.random() * 2000),
          FIELD24: Math.floor(Math.random() * 150),
          FIELD25: Math.floor(Math.random() * 1000),
          FIELD26: Math.floor(Math.random() * 100),
          FIELD27: Math.floor(Math.random() * 400),
          FIELD28: Math.floor(Math.random() * 600),
          FIELD29: Math.floor(Math.random() * 500),
          FIELD30: Math.floor(Math.random() * 300),
        });
      } else {
        virtualData.push({
          TaskID: i + 1,
          Crew: [],
          FIELD1: names[Math.floor(Math.random() * names.length)],
          FIELD2: 1967 + (i % 10),
          FIELD3: Math.floor(Math.random() * 200),
          FIELD4: Math.floor(Math.random() * 100),
          FIELD5: Math.floor(Math.random() * 2000),
          FIELD6: Math.floor(Math.random() * 1000),
          FIELD7: Math.floor(Math.random() * 100),
          FIELD8: Math.floor(Math.random() * 10),
          FIELD9: Math.floor(Math.random() * 10),
          FIELD10: Math.floor(Math.random() * 100),
          FIELD11: Math.floor(Math.random() * 100),
          FIELD12: Math.floor(Math.random() * 1000),
          FIELD13: Math.floor(Math.random() * 10),
          FIELD14: Math.floor(Math.random() * 10),
          FIELD15: Math.floor(Math.random() * 1000),
          FIELD16: Math.floor(Math.random() * 200),
          FIELD17: Math.floor(Math.random() * 300),
          FIELD18: Math.floor(Math.random() * 400),
          FIELD19: Math.floor(Math.random() * 500),
          FIELD20: Math.floor(Math.random() * 700),
          FIELD21: Math.floor(Math.random() * 800),
          FIELD22: Math.floor(Math.random() * 1000),
          FIELD23: Math.floor(Math.random() * 2000),
          FIELD24: Math.floor(Math.random() * 150),
          FIELD25: Math.floor(Math.random() * 1000),
          FIELD26: Math.floor(Math.random() * 100),
          FIELD27: Math.floor(Math.random() * 400),
          FIELD28: Math.floor(Math.random() * 600),
          FIELD29: Math.floor(Math.random() * 500),
          FIELD30: Math.floor(Math.random() * 300),
        });
      }
    }
    this.tasks = virtualData;

    // stringify JSON Object
    const jsonContent = JSON.stringify(virtualData);
    const fs = require('fs');
    fs.writeFile('database/tasks.json', jsonContent, 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(err);
      }

      console.log('JSON file has been saved.');
    });
  }
}

export default TaskService;
