import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style/TaskItem.module.css';
import { Trash, Edit, Star } from "react-feather";
import { DataContext } from '../../hook/dataContext';
import useTodayDate from '../../hook/customHook/useTodayDate';
import useTommoroDate from '../../hook/customHook/useTommoroDate';
import useYesterdayDate from '../../hook/customHook/useYesterDayDate';
import UpdateModal from '../Modal/UpdateModal';



function TaskItem({ task }) {
  const { tasks, setTasks } = useContext(DataContext);
  const [isComplete, setIsComplete] = useState(task.status);
  const [isImportant, setIsImportant] = useState(task.important);
      const [isUpdateModal, setUpdateModal] = useState(false);
  // custom hooks
  const [today] = useTodayDate();
  const [tommoro] = useTommoroDate();
  const [yesterday] = useYesterdayDate();

  function handleComplete(id) {
    setIsComplete(!isComplete);
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, status: !isComplete } : el))
    );
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleImportant(id) {
    setIsImportant(!isImportant);
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, important: !isImportant } : el
      )
    );
  }
  function handleUpdateModal(status) {
    setUpdateModal(status);
  }

  const getTime = (time) => {
    let timeDate;
    switch (time) {
      case today:
        timeDate = "Today";
        break;

      case "":
        timeDate = "No Time";
        break;

      case tommoro:
        timeDate = "Tommoro";
        break;

      case yesterday:
        timeDate = "Yesterday";
        break;

      default:
        timeDate = time;
        break;
    }
    return timeDate;
  };



  return (
    <>
      <div className={isComplete ? style.taskComplete : style.task}>
        <div>
          <input
            type="checkbox"
            checked={isComplete}
            name="status"
            onChange={() => handleComplete(task.id)}
          />
          <Link to={`task/${task.id}`}>
            <h4>{task.title}</h4>
            <span>{getTime(task.time)}</span>
          </Link>
        </div>
        <div>
          <Trash onClick={() => handleDelete(task.id)} />
          <Edit onClick={handleUpdateModal} />
          <Star
            style={{ color: isImportant && "red" }}
            onClick={() => handleImportant(task.id)}
          />
        </div>
      </div>
      {isUpdateModal && (
        <UpdateModal task={task} onGetModal={handleUpdateModal} />
      )}
    </>
  );
}

export default TaskItem