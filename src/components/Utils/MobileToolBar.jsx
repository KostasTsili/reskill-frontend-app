import { NavLink } from "react-router-dom";

export default function MobileToolBar() {
  return (
    <div 
    className={`m-1 p-1 flex flex-col justify-between 
    space-y-4 my-4 items-center font-semibold`}>
      <NavLink className={`m-1 p-1 hover:text-red-600`} to={"/"}>
        Home
      </NavLink>
      <NavLink className={`m-1 p-1 hover:text-red-600`} to={"/"}>
        Read
      </NavLink>
      <NavLink className={`m-1 p-1 hover:text-red-600`} to={"/"}>
        Related
      </NavLink>
      <button
        className="bg-white text-black m-1 p-1 py-2 px-2 rounded-lg"
      >
        Sign Up
      </button>
    </div>
  );
}
