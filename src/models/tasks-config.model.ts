import { Column } from '@interfaces/tasks.interface';

const taskConfigModel: Column[] = [
  {
    field: 'taskID',
    name: 'Task ID',
    css_class: 'Right',
    sorted: 1,
    is_primary: true,
    filter: false,
    hidden: false,
    freezed: false,
    width: '90',
    type: 'Num',
  },
  {
    field: 'taskName',
    name: 'Task Name',
    css_class: 'Right',
    sorted: 2,
    is_primary: false,
    filter: false,
    hidden: false,
    freezed: false,
    width: '90',
    type: 'Text',
  },
  {
    field: 'startDate',
    name: 'Start Date',
    css_class: 'Right',
    sorted: 4,
    is_primary: false,
    filter: false,
    hidden: false,
    freezed: false,
    width: '90',
    type: 'Date',
  },
  {
    field: 'isParent',
    name: 'Is Parent',
    css_class: 'Right',
    sorted: 3,
    is_primary: false,
    filter: false,
    hidden: false,
    freezed: false,
    width: '90',
    type: 'Boolean',
  },
];

export default taskConfigModel;
