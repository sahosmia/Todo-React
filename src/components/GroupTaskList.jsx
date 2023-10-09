import { useContext } from "react";
import { HeadingTitle } from "./HeadingTitle";
import { TaskList } from "./Task/TaskList";
import { DataContext } from "../hook/dataContext";
import useTodayDate from "../hook/customHook/useTodayDate";

function GroupTaskList({ taskGroup }) {
  const { tasks } = useContext(DataContext);

  // custom hooks
  const [today] = useTodayDate();
  let taskList;
  let title;
  if (taskGroup === "today") {
    title = "Today";
    taskList = tasks.filter(
      (task) =>
        (task.status === false && today === task.time) ||
        (task.time <= "" && task.status === false)
    );
  } else if (taskGroup === "important") {
    title = "Important";
    taskList = tasks.filter((task) => task.important === true);
  } else if (taskGroup === "completed") {
    title = "Completed";
    taskList = tasks.filter((task) => task.status === true);
  } else if (taskGroup === "due") {
    title = "Due";
    taskList = tasks.filter(
      (task) => task.time < today && task.status === false && task.time !== ""
    );
  } else if (taskGroup === "task") {
    title = "Task";
    taskList = tasks.filter(
      (task) =>
        task.time == today ||
        ((task.time >= today || task.time <= today || task.time == "") &&
          task.status === false)
    );
  }

  return (
    <>
      <HeadingTitle length={taskList.length} title={title} />
      <TaskList taskList={taskList}></TaskList>
    </>
  );
}

export default GroupTaskList;
