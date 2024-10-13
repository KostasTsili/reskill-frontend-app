import { NavLink } from "react-router-dom";

export default function ToolBar() {
  return (
    <div className={`mr-8 font-medium hidden lg:block`}>
      <a className={`mr-5 hover:text-red-600`} href={"/"}>
        Home
      </a>
      <a className={`mr-5 hover:text-red-600`} href={"#main-post"}>
        Read
      </a>
      <a className={`mr-5 hover:text-red-600`} href={"#posts-list"}>
        Related
      </a>
      <button
        className="bg-black text-white py-2 px-4 rounded-md"
      >
        Sign Up
      </button>
    </div>
  );
}
