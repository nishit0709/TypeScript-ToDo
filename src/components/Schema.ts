export enum Status {
    TODO = "Todo",
    DOING = "Doing",
    DONE = "Done",
  }
export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
  };