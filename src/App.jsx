import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TasksPage from "./pages/TasksPage/TasksPage";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import EditTask from "./components/EditTask";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="/tasks/:taskId/edit" element={<EditTask />} />
      </Routes>
    </Layout>
  );
};
export default App;
