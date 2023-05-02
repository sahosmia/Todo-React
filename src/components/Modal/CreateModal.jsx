import { useContext } from 'react'
import style from "./ModalStyle.module.css"
import { X } from "react-feather";
import { DataContext } from '../../hook/dataContext';
import useDateFormate from '../../hook/customHook/useDateFormate';
import { useFormik } from 'formik';
import { object, string, date } from "yup";



function CreateModal({ onGetModal }) {
  const { tasks, setTasks } = useContext(DataContext);

  
  const createFormik = useFormik({
    initialValues: {
      id: tasks.length + 1,
      title: "",
      time: "",
      description: "",
    },

    validationSchema: object({
      title: string().required().min(4).max(30),
      time: date(),
      description: string().min(10).max(255).nullable(),
    }),

    onSubmit: (values) => {
      const newTask = {
        id: values.id,
        title: values.title,
        time: timeFormate,
        description: values.description,
        status: false,
      };

      setTasks([...tasks, newTask]);
      onGetModal(false);

    },
  });
  // declear it after formik 
  const [timeFormate] = useDateFormate(createFormik.values.time);

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
          <form onSubmit={createFormik.handleSubmit} autoComplete="off">
            <div>
              <label>
                Title <span className="required">*</span>
              </label>
              <input
                id="createFormikTitle"
                name="title"
                type="text"
                value={createFormik.values.title}
                onChange={createFormik.handleChange}
              />
              {createFormik.touched.title && createFormik.errors.title && (
                <span className="errorMassage">
                  {createFormik.errors.title}
                </span>
              )}
            </div>
            <div>
              <label>Time</label>
              <input
                id="createFormikTime"
                name="time"
                type="date"
                value={createFormik.values.time}
                onChange={createFormik.handleChange}
              />
              {createFormik.touched.time && createFormik.errors.time && (
                <span className="errorMassage">{createFormik.errors.time}</span>
              )}
            </div>
            <div>
              <label>Description</label>
              <textarea
                id="createFormikDescription"
                name="description"
                rows={5}
                value={createFormik.values.description}
                onChange={createFormik.handleChange}
              ></textarea>
              {createFormik.touched.description &&
                createFormik.errors.description && (
                  <span className="errorMassage">
                    {createFormik.errors.description}
                  </span>
                )}
            </div>
            <div className={style.modalBoxFooter}>
              <button type="submit">Create</button>
              <button type='button' onClick={handleModalShow}>Cancle</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateModal