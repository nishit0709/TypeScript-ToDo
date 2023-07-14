interface Props {
    tasks: Array<any>;
    grabTitle(params: any): void;
    grabTask(params: any): void;
    grabID(params:any):void;
  }
  export default function TaskList(props: Props) {
    return (
      <>
        <ul className="taskList">
          {props.tasks.map((t) => {
            return (
              <div
                className="something"
                onClick={() => {
                  props.grabTitle(t.title);
                  props.grabTask(t.task);
                  props.grabID(t.id);
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
      </>
    );
  }
  