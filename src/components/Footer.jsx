import FooterList from "./Utils/FooterList";
import FaIcons from "./Utils/FaIcons";


export default function Footer (){

    return (
        <div className={
          `relative flex justify-between
           w-full h-40 mt-10 px-8 pb-2 
           dark:bg-black dark:text-white
           `
        }>
     
       <div className="w-1/2 flex flex-col justify-between">
       <div className="top-0 left-0">
            <p className="text-left font-normal">Site Name</p>
        </div>
            <div className="mt_auto">
            <FaIcons/>
        </div>
         
       </div>

            <div className={`
               relative flex flex-row w-1/2 justify-between
              `}>
              <FooterList tableHeader={"Topic1"}/>
              <FooterList tableHeader={"Topic2"}/>
              <FooterList tableHeader={"Topic3"}/>
            </div>
        </div>
    )
}