<<<<<<< HEAD
import MobileToolBar from "./MobileToolBar";
import { useState } from "react";


export default function MobileMenu (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() => setIsOpen(!isOpen);


    return (
        <div className="lg:hidden">
          <button
            id="hamburger-button"
            className="text-3xl text-black dark:text-white cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          {isOpen && (
            <div
              id="mobile-menu"
              className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-start p-8 z-20 transition-all duration-300 ease-in-out"
            >
              <button
                className="text-6xl text-white self-end px-6"
                onClick={toggleMenu}
              >
                &times;
              </button>
             <div className="w-full"> 
              <nav 
              className={`flex flex-col items-center space-y-10 m-1 p-1 mt-10 text-white bg-black rounded-md
              ${(isOpen?"block":"hidden")}`}>
                <MobileToolBar />
              </nav>
              </div>
            </div>
          )}
          
        </div>
      );
=======
export default function MobileMenu (){



    return (
        <div className="">
            <button id="hamburger-button" className="md:hidden text-4xl dark:text-white">
               &#9776;
            </button>
        </div>
    )
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
}