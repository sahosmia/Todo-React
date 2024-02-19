import { useContext } from "react";
import { X } from "react-feather";
import { DataContext } from "../../hook/dataContext";
import { useFormik } from "formik";
import { object, string, date } from "yup";
import useUpdateDateFormate from "../../hook/customHook/useUpdateDateFormate";

function UpdateModal({ task, onCloseModal }) {
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
      onCloseModal();
    },
  });

  // declear it after formik
  const [timeFormate] = useUpdateDateFormate(updateFormik.values.time);

  return (
    <>
      <div className="bg-white absolute left-1/2 top-[10%] -translate-x-1/2 rounded p-7 shadow w-5/12">
        <div className="mb-4 pb-1 border-b border-b-gray-200 text-gray-700 flex items-center justify-between">
          <h4>Update Task</h4>
          <X onClick={onCloseModal} />
        </div>
        <div>
          <form
            onSubmit={updateFormik.handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label>
                Title <span className="required">*</span>
              </label>
              <input
                id="updateFormikTitle"
                name="title"
                type="text"
                value={updateFormik.values.title}
                onChange={updateFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              />
              {updateFormik.touched.title && updateFormik.errors.title && (
                <span className="errorMassage">
                  {updateFormik.errors.title}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Time</label>
              <input
                id="updateFormikTime"
                name="time"
                type="date"
                value={updateFormik.values.time}
                onChange={updateFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              />
              {updateFormik.touched.time && updateFormik.errors.time && (
                <span className="errorMassage">{updateFormik.errors.time}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <textarea
                id="updateFormikDescription"
                name="description"
                rows={5}
                value={updateFormik.values.description}
                onChange={updateFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              ></textarea>
              {updateFormik.touched.description &&
                updateFormik.errors.description && (
                  <span className="errorMassage">
                    {updateFormik.errors.description}
                  </span>
                )}
            </div>
            <div className="pt-3 mt-5 border-t border-t-gray-200 pb-3 flex justify-end gap-1 flex-row">
              <button
                className=" bg-green-600 border-none text-white py-2 px-5 cursor-pointer rounded"
                type="submit"
              >
                Update
              </button>
              <button
                className="bg-gray-800 border-none text-white py-2 px-5 cursor-pointer rounded"
                type="button"
                onClick={onCloseModal}
              >
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
