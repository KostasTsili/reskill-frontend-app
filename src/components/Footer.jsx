import FooterList from "./Utils/FooterList";
import FaIcons from "./Utils/FaIcons";

export default function Footer() {
  return (
    <div
      className={`relative flex justify-between
           w-full h-40 mt-10 px-8 pb-2 
           dark:bg-black dark:text-white
           flex-col md:flex-row
           `}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-between mb-4 md:mb-2 items-center md:items-start">
        <div className="top-0 left-0 mb-6">
          <p className="text-left font-normal">Site Name</p>
        </div>
        <div className="mt_auto mb-6">
          <FaIcons />
        </div>
      </div>
      <div
        className={"relative flex flex-col sm:flex-row w-fill md:w-1/2 justify-between items-center"}
      >
        <FooterList tableHeader={"Topic1"} />
        <FooterList tableHeader={"Topic2"} />
        <FooterList tableHeader={"Topic3"} />
      </div>
    </div>
  );
}
