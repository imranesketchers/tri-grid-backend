import { Task } from '@interfaces/tasks.interface';

const taskModel: Task[] = [
  {
    taskID: 1,
    taskName: 'Parent Task 1',
    startDate: '1992-06-07T00:00:00Z',
    endDate: '1994-08-25T00:00:00Z',
    progress: 'In Progress',
    priority: 'High',
    duration: 24,
    order: 1,
    isParent: true,
  },
  {
    taskID: 3,
    taskName: 'Child Task 3',
    startDate: '1992-06-07T00:00:00Z',
    endDate: '1994-08-25T00:00:00Z',
    progress: 'Validated',
    priority: 'Critical',
    duration: 43,
    order: 2,
    parentItem: 1,
    isParent: false,
  },
  {
    taskID: 4,
    taskName: 'Child Task 4',
    startDate: '1992-06-07T00:00:00Z',
    endDate: '1994-08-25T00:00:00Z',
    progress: 'Validated',
    priority: 'Critical',
    duration: 43,
    order: 3,
    isParent: true,
  },
  {
    taskID: 5,
    taskName: 'Child Task 5',
    startDate: '1992-06-07T00:00:00Z',
    endDate: '1994-08-25T00:00:00Z',
    progress: 'Validated',
    priority: 'Critical',
    duration: 43,
    order: 4,
    isParent: true,
  },
];

export default taskModel;
