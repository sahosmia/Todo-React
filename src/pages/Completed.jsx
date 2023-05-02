import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import { DataContext } from "../hook/dataContext";

function Completed() {
  const { tasks, setTasks } = useContext(DataContext);


  const completedTasks = tasks.filter((task) => task.status === true)

  return (
    <>
      <h4>Completed ({completedTasks.length})</h4>

      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </>
  );
}

export default Completed;
