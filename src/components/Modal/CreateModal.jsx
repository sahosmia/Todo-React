import { useContext } from "react";
import { X } from "react-feather";
import { DataContext } from "../../hook/dataContext";
import useDateFormate from "../../hook/customHook/useDateFormate";
import { useFormik } from "formik";
import { object, string, date } from "yup";

function CreateModal({ onCloseModal }) {
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
      onCloseModal();
    },
  });
  // declear it after formik
  const [timeFormate] = useDateFormate(createFormik.values.time);

  const handleModalShow = () => {
    onCloseModal();
  };

  return (
    <>
      <div className="bg-white absolute left-1/2 top-[10%] -translate-x-1/2 rounded p-7 shadow w-5/12">
        <div className="mb-4 pb-1 border-b border-b-gray-200 text-gray-700 flex items-center justify-between">
          <h4>Add Task</h4>
          <X onClick={handleModalShow} />
        </div>
        <div>
          <form
            onSubmit={createFormik.handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-2">
              <label>
                Title <span className="required">*</span>
              </label>
              <input
                id="createFormikTitle"
                name="title"
                type="text"
                value={createFormik.values.title}
                onChange={createFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              />
              {createFormik.touched.title && createFormik.errors.title && (
                <span className="errorMassage">
                  {createFormik.errors.title}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Time</label>
              <input
                id="createFormikTime"
                name="time"
                type="date"
                value={createFormik.values.time}
                onChange={createFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              />
              {createFormik.touched.time && createFormik.errors.time && (
                <span className="errorMassage">{createFormik.errors.time}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <textarea
                id="createFormikDescription"
                name="description"
                rows={5}
                value={createFormik.values.description}
                onChange={createFormik.handleChange}
                className="border border-gray-300 p-2 rounded text-lg"
              ></textarea>
              {createFormik.touched.description &&
                createFormik.errors.description && (
                  <span className="errorMassage">
                    {createFormik.errors.description}
                  </span>
                )}
            </div>
            <div className="pt-3 mt-5 border-t border-t-gray-200 pb-3 flex justify-end gap-1 flex-row">
              <button
                className=" bg-green-600 border-none text-white py-2 px-5 cursor-pointer rounded"
                type="submit"
              >
                Create
              </button>
              <button
                className=" bg-gray-800 border-none text-white py-2 px-5 cursor-pointer rounded"
                type="button"
                onClick={handleModalShow}
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

export default CreateModal;
