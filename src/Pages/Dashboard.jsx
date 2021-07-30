import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <Link to="/dashboard/setting">Setting</Link>
    </>
  );
};
