export const enum status{
        Todo="Todo",
        Doing= "Doing",
        Done="Done"
        }

export default interface taskType{    
        id: number;
        title: string;
        description: string;
        status: status.Doing|status.Done|status.Todo|undefined
}

