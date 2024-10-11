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