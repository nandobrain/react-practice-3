

export default function Task(props) {
    return (
        <div className="task">
          <h1>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)}> X </button>
          <button>Complete</button>
        </div>
      );
}