export enum Status {
    TODO = "To-do",
    DOING = "Doing",
    DONE = "Done"
  }
export interface Task {
    id: number;
    title: string;
    task: string;
    status: Status|string;
  }
