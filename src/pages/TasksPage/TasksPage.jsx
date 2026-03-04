import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../../redux/tasks/selectors";
import { useNavigate } from "react-router-dom";
import { toggleTaskStatus } from "../../redux/tasks/slice";
import { CATEGORIES } from "../../constants/categories";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TasksPage = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Completed and uncompleted tasks
  const uncompletedTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  const renderCategoryIcon = (categoryValue) => {
    const cat = CATEGORIES.find((c) => c.value === categoryValue);
    if (!cat) return null;
    return (
      <span
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: cat.bg, color: cat.color }}
      >
        <cat.Icon />
      </span>
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-100 flex-col items-center gap-5 p-6">
      <div className="flex items-center justify-center gap-5 self-start">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#4A3780] text-white"
        >
          <ArrowBackIosIcon fontSize="small" className="ml-2" />
        </button>
        <h1 className="text-[2.7rem] font-bold tracking-[-0.24rem] text-[#4A3780]">
          Task Planner
        </h1>
      </div>

      <div className="flex flex-col gap-15">
        <div>
          <h1 className="mb-6 text-center text-[2rem] font-bold text-[#4A3780]">
            My To-Do List
          </h1>
          {/*To Do List*/}
          <div>
            {uncompletedTasks.length === 0 && (
              <p className="mb-3 text-center text-gray-400">
                No tasks yet. Add one!
              </p>
            )}
            {uncompletedTasks.map((task) => (
              <div
                key={task.id}
                className="mb-3 flex items-center gap-3 rounded-full bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              >
                {renderCategoryIcon(task.category)}
                <div
                  onClick={() => navigate(`/tasks/${task.id}`)}
                  className="flex flex-1 cursor-pointer flex-col"
                >
                  <span className="font-medium text-[#4A3780]">
                    {task.text}
                  </span>
                  {(task.dueDate || task.dueTime) && (
                    <div className="flex gap-3 text-sm text-gray-400">
                      {task.dueDate && (
                        <span className="flex items-center gap-1">
                          <CalendarTodayIcon sx={{ fontSize: "0.9rem" }} />
                          {task.dueDate}
                        </span>
                      )}
                      {task.dueTime && (
                        <span className="flex items-center gap-1">
                          <AccessTimeIcon sx={{ fontSize: "0.9rem" }} />
                          {task.dueTime}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    dispatch(
                      toggleTaskStatus({
                        id: task.id,
                        completed: !task.completed,
                      }),
                    )
                  }
                  className="h-5 w-5 cursor-pointer accent-[#4A3780]"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-[2rem] font-bold text-[#4A3780]">
            Completed
          </h2>
          {/*Completed Tasks*/}
          <div>
            {completedTasks.length === 0 && (
              <p className="mb-3 text-center text-gray-400">
                Nothing completed yet.
              </p>
            )}
            {completedTasks.map((task) => (
              <div
                key={task.id}
                className="mb-3 flex items-center gap-3 rounded-full bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              >
                {renderCategoryIcon(task.category)}
                <div
                  onClick={() => navigate(`/tasks/${task.id}`)}
                  className="flex flex-1 cursor-pointer flex-col"
                >
                  <span className="font-medium text-[#4A3780] line-through">
                    {task.text}
                  </span>
                  {(task.dueDate || task.dueTime) && (
                    <div className="flex gap-3 text-sm text-gray-400">
                      {task.dueDate && (
                        <span className="flex items-center gap-1">
                          <CalendarTodayIcon sx={{ fontSize: "0.9rem" }} />
                          {task.dueDate}
                        </span>
                      )}
                      {task.dueTime && (
                        <span className="flex items-center gap-1">
                          <AccessTimeIcon sx={{ fontSize: "0.9rem" }} />
                          {task.dueTime}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    dispatch(
                      toggleTaskStatus({
                        id: task.id,
                        completed: !task.completed,
                      }),
                    )
                  }
                  className="h-5 w-5 cursor-pointer accent-[#4A3780]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Task ekle butonu*/}
      <button
        onClick={() => navigate("/add-task")}
        className="cursor-pointer rounded-full bg-[#4A3780] px-8 py-2 text-white hover:bg-[#6e5aa6]"
      >
        Add New Task
      </button>
    </div>
  );
};
export default TasksPage;
