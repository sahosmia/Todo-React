import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import { DataContext } from "../hook/dataContext";
import useTodayDate from "../hook/customHook/useTodayDate";

function TodayComplete() {
  const { tasks, setTasks } = useContext(DataContext);
    const [today] = useTodayDate();
    

  const completedTasks = tasks.filter(
    (task) => task.status === true && task.time === today
  );

  return (
    <>
      <h4 className="title mt_2">Completed ({completedTasks.length})</h4>

      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </>
  );
}

export default TodayComplete;
