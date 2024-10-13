<<<<<<< HEAD
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
=======
import { Link } from "react-router-dom"

export default function ToolBar(){

    return (
        <div className="mr-8 font-medium">
       <span>
        <Link className="mr-5 hover:text-red-600" to={"/"}>Home</Link>
        <Link className="mr-5 hover:text-red-600" to={"/"}>Read</Link>
        <Link className="mr-5 hover:text-red-600" to={"/"}>Related</Link>
       </span>
       
        <button  className={
            `
            bg-black text-white
            py-2 px-4
            rounded-lg
            `
        }  >
            Button
            </button>
  
        
        </div>
    )
}
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
