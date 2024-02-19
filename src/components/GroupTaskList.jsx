import { useContext } from "react";
import { DataContext } from "../hook/dataContext";
import { getTitle } from "../utils/getTitle";
import { getData } from "../utils/getData";
import TaskItem from "./TaskItem";

function GroupTaskList({ taskGroup }) {
  const { tasks } = useContext(DataContext);

  let taskList = getData(taskGroup, tasks);
  const title = getTitle(taskGroup);

  return (
    <>
      <h4 className="title">
        {title} ({taskList.length})
      </h4>
      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default GroupTaskList;
