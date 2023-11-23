import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RateReviewIcon from "@mui/icons-material/RateReview";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Logo Here</span>
        </Link>
      </div>
      <hr />
      <div className="center mt-5">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li>
              <DashboardIcon className="icon" />

              <span>Dashboard</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/products">
            <li>
              <Inventory2Icon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/orders">
            <li>
              <CreditCardIcon className="icon" />

              <span>Orders</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/users">
            <li>
              <PersonOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <li>
              <RateReviewIcon className="icon" />

              <span>Blog</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/reviews">
            <li>
              <StarIcon className="icon" />
              <span>Reviews</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/notifications">
            <li>
              <NotificationsIcon className="icon" />

              <span>Notifications</span>
            </li>
          </Link>
          <li>
            <SettingsIcon className="icon" />
            <Link style={{ textDecoration: "none" }} to="/">
              <span>Settings</span>
            </Link>
          </li>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <li>
              <AccountBoxIcon className="icon" />

              <span>Profile</span>
            </li>
          </Link>
          <li>
            <PowerSettingsNewIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
