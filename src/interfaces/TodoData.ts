export interface TodoData {
  [key: string]: string;
  name: string;
  description: string;
  status: "" | "Doing" | "Done" | "To-Do";
}
