import { Link } from "react-router-dom";
import Icon from "../../assets/home-page-icon.svg";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <img src={Icon} alt="Task Planner" className="h-50 w-50" />
      <h1 className="text-[2.5rem] font-bold tracking-[-0.24rem] text-[#4A3780]">
        Task Planner
      </h1>
      <p className="text-center text-gray-500">
        Organize your tasks, stay on track.
      </p>
      <div className="flex gap-4">
        <Link
          to="/tasks"
          className="cursor-pointer rounded-full border border-[#4A3780] px-8 py-2 text-[#4A3780] hover:bg-[#4A3780] hover:text-white"
        >
          View Tasks
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
