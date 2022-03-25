import { Link, Outlet } from "react-router-dom";

const Shows = () => {
  return (
    <div>
      <Link to="/shows/1">Show 1</Link>
      <Link to="/shows/2">Show 2</Link>
    </div>
  );
};

export default Shows;
