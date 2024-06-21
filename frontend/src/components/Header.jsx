import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="p-3 bg-sky-700 text-black  ">
        <ul className="flex justify-between">
          <li className="text-3xl text-white">
            <Link to="/">Category</Link>
          </li>
          <li>
            <button className="px-4 py-2 rounded-md bg-sky-500 text-white">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
