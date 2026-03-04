import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllTasks } from "../redux/tasks/selectors";
import { deleteTask } from "../redux/tasks/slice";
import { CATEGORIES } from "../constants/categories";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TaskDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const { taskId } = useParams();

  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return <h2>Task not found</h2>;
  }

  const cat = CATEGORIES.find((c) => c.value === task.category);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate("/tasks");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-100 flex-col gap-4 p-6">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/tasks")}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#4A3780] text-white"
          >
            <ArrowBackIosIcon fontSize="small" className="ml-2" />
          </button>
          <h2 className="text-[1.4rem] font-bold text-[#4A3780]">
            Task Details
          </h2>
          <div className="w-9" />
        </header>

        <div className="flex items-center gap-3">
          {cat && (
            <span
              className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: cat.bg, color: cat.color }}
            >
              <cat.Icon fontSize="medium" />
            </span>
          )}
          <h3 className="text-[1.2rem] font-semibold text-[#4A3780]">
            {task.text}
          </h3>
        </div>

        {(task.dueDate || task.dueTime) && (
          <div className="flex gap-4 text-sm text-gray-500">
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <CalendarTodayIcon fontSize="small" />
                {task.dueDate}
              </span>
            )}
            {task.dueTime && (
              <span className="flex items-center gap-1">
                <AccessTimeIcon fontSize="small" />
                {task.dueTime}
              </span>
            )}
          </div>
        )}

        {task.notes && (
          <div>
            <h4 className="mb-1 font-semibold text-[#4A3780]">Notes</h4>
            <p className="w-full rounded-2xl border border-[#E0E0E0] px-4 py-2 text-[1rem] text-gray-700">
              {task.notes}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate(`/tasks/${task.id}/edit`)}
            className="cursor-pointer rounded-full bg-[#4A3780] px-8 py-2 text-white hover:bg-[#6e5aa6]"
          >
            Edit Task
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="cursor-pointer rounded-full border border-red-400 px-8 py-2 text-red-400 hover:bg-red-50"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskDetails;
