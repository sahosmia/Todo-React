import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem"
import { DataContext } from "../hook/dataContext";
import useTodayDate from "../hook/customHook/useTodayDate";
import TodayComplete from "../components/TodayComplete";


function Today() {
  const { tasks, setTasks } = useContext(DataContext);

  // custom hooks 
  const [today] = useTodayDate();

const todayTasks = tasks.filter(
  (task) => (task.status === false && today === task.time) || (task.time <= "" && task.status === false)
);
  return (
    <>
      <h4 className="title">Today ({todayTasks.length})</h4>
      {todayTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}

      <TodayComplete />
    </>
  );
}

export default Today