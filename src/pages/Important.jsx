import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import { DataContext } from "../hook/dataContext";

function Important() {
  const { tasks, setTasks } = useContext(DataContext);

  const importantTasks = tasks.filter((task) => task.important === true);

  return (
    <>
      <h4>Important ({importantTasks.length})</h4>

      {importantTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default Important;
