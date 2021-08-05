import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const plus = <FontAwesomeIcon icon={faPlus} />;
function SideBar() {
  return (
    <div className="flex">
      <ul className="text-4xl w-80 m-8 py-10 border-8 border-gray-900 text-center self-center flex-auto">
        <li className="py-10 ">
          <Link to={'/sessions'}>
            <button className="hover:text-gray-600 transform hover:scale-110 duration-75">
              Sessions
            </button>
          </Link>
        </li>
        <li className="py-10">
          <Link to={"/locations"}>
            <button className="hover:text-gray-600 transform hover:scale-110 duration-75">
              Locations
            </button>
          </Link>
        </li>
        <li className="py-10">
          <Link to={"/charts"}>
            <button className="hover:text-gray-600 transform hover:scale-110 duration-75">
              Charts
            </button>
          </Link>
        </li>
        <li className="py-10">
          <Link to={"/addsession"}>
            <button className="text-5xl text-gray-900 hover:text-gray-600 transform hover:scale-110 duration-75">
              {plus}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
