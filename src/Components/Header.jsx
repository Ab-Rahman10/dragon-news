import moment from "moment";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-80">
        <img src={Logo} alt="Logo" />
      </div>
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <div>
        <p className="text-gray-500">{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
