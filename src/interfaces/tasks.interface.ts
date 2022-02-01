// export interface Column {
//   header?: string;
//   field: string;
//   name?: string;
//   css_class?: string;
//   sorted: number;
//   sort_type: string;
//   editable: Boolean;
//   filter: Boolean;
//   hidden: Boolean;
//   width?: string;
//   renderer?: any;
//   header_renderer?: any;
//   type?: string;
//   component?: any;
//   editor?: any;
//   on_component_init?: any;
//   case_sensitive_filter: Boolean;
//   summary_renderer?: any;
// }
export interface Column {
  header?: string;
  field: string;
  name?: string; // column's Name,
  css_class?: string; // Font-size, Font-color, Background-color, Alignment, Text-wrap
  sorted: number; // user can also Drag-n-drop to Reorder & Resize columns.
  sort_type?: string;
  editable?: Boolean;
  is_primary: Boolean; // if the column is primary
  filter: Boolean; //  Enable "Filter Bar" in Parent Hierarchy Mode
  hidden: Boolean; // Show/hide any columns from a list of all columns.
  freezed: Boolean; // Freeze all left-hand-side (including current) columns
  width?: string; // Minimum-Column-Width (when screen shrank)
  renderer?: any;
  header_renderer?: any;
  type?: string; // Data Type (Text / Num / Date / Boolean / DropDownList)
  default_value?; // Default-Value (of current Data Type)
  component?: any;
  editor?: any;
  on_component_init?: any;
  case_sensitive_filter?: Boolean;
  summary_renderer?: any;
}

export interface BasicColumn {
  taskID: number;
  ParentItem?: number;
  isParent: Boolean;
}

export declare type Task = {
  taskID: number;
  parentItem?: number;
  isParent: Boolean;
  [key: string]: any;
};

// export declare type Task;

export const sampleHierarchyData = [
  {
    taskID: 1,
    taskName: 'Planning',
    startDate: new Date('02/03/2017'),
    endDate: new Date('02/07/2017'),
    progress: 100,
    duration: 5,
    priority: 'Normal',
    approved: false,
    subtasks: [
      {
        taskID: 2,
        taskName: 'Plan timeline',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Normal',
        approved: false,
      },
      {
        taskID: 5,
        taskName: 'Planning complete',
        startDate: new Date('02/07/2017'),
        endDate: new Date('02/07/2017'),
        duration: 0,
        progress: 0,
        priority: 'Low',
        approved: true,
      },
    ],
  },
];

export const sampleSelfReferenceData = [
  {
    TaskID: 1,
    TaskName: 'Parent Task 1',
    StartDate: '1992-06-07T00:00:00Z',
    EndDate: '1994-08-25T00:00:00Z',
    Progress: 'In Progress',
    Priority: 'High',
    Duration: 24,
    isParent: true,
  },
  {
    TaskID: 3,
    TaskName: 'Child Task 3',
    StartDate: '1992-06-07T00:00:00Z',
    EndDate: '1994-08-25T00:00:00Z',
    Progress: 'Validated',
    Priority: 'Critical',
    Duration: 43,
    ParentItem: 1,
    isParent: false,
  },
];
