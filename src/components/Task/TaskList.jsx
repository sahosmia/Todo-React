import TaskItem from "./TaskItem";

export function TaskList({ taskList }) {
  return (
    <div>
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
