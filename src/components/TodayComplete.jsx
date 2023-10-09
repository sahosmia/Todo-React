import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import { DataContext } from "../hook/dataContext";
import useTodayDate from "../hook/customHook/useTodayDate";
import { HeadingTitle } from "./HeadingTitle";

function TodayComplete() {
  const { tasks } = useContext(DataContext);
  const [today] = useTodayDate();

  const completedTasks = tasks.filter(
    (task) => task.status === true && task.time === today
  );

  return (
    <>
      <HeadingTitle
        length={completedTasks.length}
        title="Completed"
      ></HeadingTitle>

      {completedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default TodayComplete;
