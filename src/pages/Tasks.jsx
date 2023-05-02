import { useContext } from 'react'
import TaskItem from '../components/Task/TaskItem';
import useTodayDate from '../hook/customHook/useTodayDate';
import { DataContext } from '../hook/dataContext';

function Tasks() {
  const { tasks, setTasks } = useContext(DataContext);
  const [today] = useTodayDate();

  const todayTasks = tasks.filter(
    (task) =>
      task.time == today ||
      ((task.time >= today || task.time <= today || task.time == "") &&
        task.status === false)
  );
  return (
    <>
      <h4>Today ({todayTasks.length})</h4>
      {todayTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

export default Tasks