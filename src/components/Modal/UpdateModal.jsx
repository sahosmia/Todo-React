import { useContext } from 'react'
import style from "./ModalStyle.module.css"
import { X } from "react-feather";
import { DataContext } from '../../hook/dataContext';
import { useFormik } from 'formik';
import { object, string, date } from "yup";
import useUpdateDateFormate from '../../hook/customHook/useUpdateDateFormate';



function UpdateModal({ task, onGetModal }) {
  const { tasks, setTasks } = useContext(DataContext);

  const updateFormik = useFormik({

    initialValues: {
      id: task.id,
      title: task.title,
      time: task.time,
      description: task.description,
    },

    validationSchema: object({
      title: string().required().min(4).max(30),
      // time: date(),
      description: string().min(10).max(255).nullable(),
    }),

    onSubmit: (values) => {
      const updateTask = {
        id: values.id,
        title: values.title,
        time: timeFormate,
        description: values.description,
        status: false,
      };

      const newTasks = tasks.filter((task) => task.id !== values.id);
      setTasks(newTasks);
      setTasks((prevTasks) => [...prevTasks, updateTask]);
      onGetModal(false);
    },
  });
  
  // declear it after formik
  const [timeFormate] = useUpdateDateFormate(updateFormik.values.time);

  const handleModalShow = () => {
    onGetModal(false);
  };

  return (
    <>
      <div className={style.modalBox}>
        <div
          className={
            style.modalBoxHeader + " flex alignItemCenter justifyBetween"
          }
        >
          <h4>Add Task</h4>
          <X onClick={handleModalShow} />
        </div>
        <div className={style.modalBoxBody}>
          <form onSubmit={updateFormik.handleSubmit} autoComplete="off">
            <div>
              <label>
                Title <span className="required">*</span>
              </label>
              <input
                id="updateFormikTitle"
                name="title"
                type="text"
                value={updateFormik.values.title}
                onChange={updateFormik.handleChange}
              />
              {updateFormik.touched.title && updateFormik.errors.title && (
                <span className="errorMassage">
                  {updateFormik.errors.title}
                </span>
              )}
            </div>
            <div>
              <label>Time</label>
              <input
                id="updateFormikTime"
                name="time"
                type="date"
                value={updateFormik.values.time}
                onChange={updateFormik.handleChange}
              />
              {updateFormik.touched.time && updateFormik.errors.time && (
                <span className="errorMassage">{updateFormik.errors.time}</span>
              )}
            </div>
            <div>
              <label>Description</label>
              <textarea
                id="updateFormikDescription"
                name="description"
                rows={5}
                value={updateFormik.values.description}
                onChange={updateFormik.handleChange}
              ></textarea>
              {updateFormik.touched.description &&
                updateFormik.errors.description && (
                  <span className="errorMassage">
                    {updateFormik.errors.description}
                  </span>
                )}
            </div>
            <div className={style.modalBoxFooter}>
              <button type="submit">Update</button>
              <button type="button" onClick={handleModalShow}>
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateModal;