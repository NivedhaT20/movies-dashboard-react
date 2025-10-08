import "../styles/header.css";
import logo from "../assets/sky-logo.png";
import { format } from 'date-fns';

const Header = () => {
  const today = new Date();
  const formattedDate = format(today, 'MMMM d, yyyy');

  return (
    <div className="app-header">
      <img
        src={logo}
        alt="Sky logo"
        className="app-logo"
      ></img>
      <span className="title-text">Movies Dashboard</span>
      <span className="title-text">{formattedDate}</span>
    </div>
  );
};

export default Header;
