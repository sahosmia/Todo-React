import PropTypes from "prop-types";
import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Trash, Edit, Star } from "react-feather";

import { DataContext } from "../../hook/dataContext";
import useTodayDate from "../../hook/customHook/useTodayDate";
import useTommoroDate from "../../hook/customHook/useTommoroDate";
import useYesterdayDate from "../../hook/customHook/useYesterDayDate";

import style from "./style/TaskItem.module.css";
import UpdateModal from "../Modal/UpdateModal";

function TaskItem({ task }) {
  const { tasks, setTasks } = useContext(DataContext);
  // custom hooks
  const [today] = useTodayDate();
  const [tommoro] = useTommoroDate();
  const [yesterday] = useYesterdayDate();

  const reducer = (state, action) => {
    if (action.type === "Complete") {
      return {
        ...state,
        isComplete: true,
      };
    }

    if (action.type === "Delete") {
      return {
        ...state,
      };
    }

    if (action.type === "Important") {
      return {
        ...state,
        isImportant: !state.isImportant,
      };
    }

    if (action.type === "UpdateModal") {
      return {
        ...state,
        isUpdateModal: action.payload,
      };
    }
  };

  const [taskState, dispatch] = useReducer(reducer, {
    isComplete: task.status,
    isImportant: task.important,
    isUpdateModal: false,
  });

  function handleComplete(id) {
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, status: !taskState.isComplete } : el
      )
    );
    dispatch({ type: "Complete", payload: id });
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    dispatch({ type: "Delete", payload: id });
  }

  function handleImportant(id) {
    setTasks(
      tasks.map((el) =>
        el.id === id ? { ...el, important: !taskState.isImportant } : el
      )
    );

    dispatch({ type: "Important", payload: id });
  }

  function handleUpdateModal(status) {
    dispatch({ type: "UpdateModal", payload: status });
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
      <div className={taskState.isComplete ? style.taskComplete : style.task}>
        <div>
          <input
            type="checkbox"
            checked={taskState.isComplete}
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

          <div
            title={
              taskState.isImportant
                ? "Remove from Important"
                : "Add To Imporant"
            }
            className=""
          >
            <Star
              style={{ color: taskState.isImportant && "red" }}
              onClick={() => handleImportant(task.id)}
            />
          </div>
        </div>
      </div>
      {taskState.isUpdateModal && (
        <UpdateModal task={task} onGetModal={handleUpdateModal} />
      )}
    </>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.any,
    important: PropTypes.any,
    status: PropTypes.any,
    time: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default TaskItem;
