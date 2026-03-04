import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => (
  <div className="flex items-center justify-center py-8">
    <CircularProgress sx={{ color: "#4A3780" }} />
  </div>
);

export default Loader;
