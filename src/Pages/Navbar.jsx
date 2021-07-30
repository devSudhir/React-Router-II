import { Link } from "react-router-dom";
export const Navbar = () => {
  const navs = [
    {
      to: "/",
      title: "Home"
    },
    {
      to: "/dashboard",
      title: "DashBoard"
    },

    {
      to: "/login",
      title: "Login"
    }
  ];
  return (
    <div>
      {navs.map((ele) => {
        return <Link to={ele.to}>{ele.title}</Link>;
      })}
    </div>
  );
};
