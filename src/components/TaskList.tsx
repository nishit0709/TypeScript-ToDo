import {Task} from "./taskInterface";
interface Props {
    tasks: Array<Task>;
    grabID(params:any):void;
    grabTask(params:any):void;
}
export default function TaskList(props: Props) {
  return (
    <div>
      <ul className="taskList">
        {props.tasks.map((t) => {
          return (
            <div
              className="something"
              onClick={() => {
                props.grabID(t.id);
                props.grabTask(t);
              }}
              key={t.title}
            >
              <div className="taskListElement">
                <div>
                  <b>{t.title}</b>
                </div>
                <div>{t.task}</div>
              </div>
              <div className="taskListStatus">{t.status}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
  