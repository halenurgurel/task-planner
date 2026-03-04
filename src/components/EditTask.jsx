import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "../redux/tasks/operations";
import { selectAllTasks } from "../redux/tasks/selectors";
import { CATEGORIES } from "../constants/categories";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

const pickerSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "1rem",
    color: "#4A3780",
    fontSize: "1rem",
    boxShadow: "none",
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#4A3780" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4A3780",
      borderWidth: "1px",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#E0E0E0",
    borderWidth: "1px",
  },
  "& .MuiSvgIcon-root": { color: "#4A3780" },
};

const EditTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { taskId } = useParams();
  const tasks = useSelector(selectAllTasks);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) return <h2>Task not found</h2>;

  const handleSubmit = async (values) => {
    await dispatch(
      updateTask({
        id: task.id,
        text: values.task,
        notes: values.notes,
        category: values.category,
        dueDate: values.dueDate,
        dueTime: values.dueTime,
      }),
    );
    navigate(`/tasks/${task.id}`);
  };

  return (
    <div className="flex flex-col items-center">
      <Formik
        initialValues={{
          task: task.text,
          notes: task.notes || "",
          category: task.category || "",
          dueDate: task.dueDate || "",
          dueTime: task.dueTime || "",
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form
            autoComplete="off"
            className="flex max-w-200 flex-col gap-4 rounded-xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
          >
            <header className="flex items-center justify-between gap-15">
              <button
                type="button"
                onClick={() => navigate(`/tasks/${task.id}`)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#4A3780] text-white"
              >
                <ArrowBackIosIcon fontSize="small" className="ml-2" />
              </button>
              <h2 className="text-[1.4rem] font-bold text-[#4A3780]">
                Edit Task
              </h2>
              <div className="w-9" />
            </header>

            <label className="font-weight-600 flex flex-col gap-1.5 text-[1.1rem]">
              Task Title
              <Field
                type="text"
                name="task"
                placeholder="Task Title"
                className="rounded-2xl border border-[#E0E0E0] px-4 py-2 text-[1rem] text-[#4A3780] hover:border-[#4A3780] focus:border-[#4a3780] focus:outline-none"
              />
              <ErrorMessage name="task" component="span" />
            </label>

            <div>
              <h3>Category</h3>
              <div className="mt-2 flex gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => setFieldValue("category", cat.value)}
                    className="inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-0 transition-opacity duration-200"
                    style={{
                      backgroundColor: cat.bg,
                      color: cat.color,
                      opacity:
                        values.category && values.category !== cat.value
                          ? 0.4
                          : 1,
                    }}
                  >
                    <cat.Icon />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-1">
                <h4>Date</h4>
                <DatePicker
                  value={values.dueDate ? dayjs(values.dueDate) : null}
                  onChange={(val) =>
                    setFieldValue(
                      "dueDate",
                      val ? val.format("YYYY-MM-DD") : "",
                    )
                  }
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small", sx: pickerSx } }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4>Time</h4>
                <TimePicker
                  value={
                    values.dueTime
                      ? dayjs(`2000-01-01T${values.dueTime}`)
                      : null
                  }
                  onChange={(val) =>
                    setFieldValue("dueTime", val ? val.format("HH:mm") : "")
                  }
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { size: "small", sx: pickerSx } }}
                />
              </div>
            </div>

            <div>
              <h3>Notes</h3>
              <Field
                as="textarea"
                name="notes"
                placeholder="Notes"
                rows="4"
                className="w-full rounded-2xl border border-[#E0E0E0] px-4 py-2 text-[1rem] text-[#4A3780] hover:border-[#4A3780] focus:border-[#4a3780] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#4A3780] px-8 py-2 text-white hover:bg-[#6e5aa6]"
            >
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default EditTask;
