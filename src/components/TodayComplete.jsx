import { useContext } from "react";
import TaskItem from "../components/Task/TaskItem";
import { DataContext } from "../hook/dataContext";
import { HeadingTitle } from "./HeadingTitle";
import { today } from "../hook/customHook/date";

function TodayComplete() {
  const { tasks } = useContext(DataContext);

  const completedTasks = tasks.filter(
    (task) => task.status === true && task.time === today()
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
