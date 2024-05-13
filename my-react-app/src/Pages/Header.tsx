import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800">
      <nav className="border">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/blinkingshape"
              className="text-white hover:text-gray-300"
            >
              Blinking Shape
            </Link>
          </li>
          <li>
            <Link
              to="/shapeslineform"
              className="text-white hover:text-gray-300"
            >
              Shapes CRUD
            </Link>
          </li>
          <li>
            <Link
              to="/shapeslist"
              className="text-white hover:text-gray-300"
            >
              Look at shapes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
