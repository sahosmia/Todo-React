import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import useTodayDate from "../hook/customHook/useTodayDate";
import { DataContext } from "../hook/dataContext";

function Due() {
  const { tasks, setTasks } = useContext(DataContext);
  const [today] = useTodayDate();

  const dueTasks = tasks.filter((task) => task.time < today && task.status === false);
  return (
    <>
      <h4>Due ({dueTasks.length})</h4>
      {dueTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default Due;
