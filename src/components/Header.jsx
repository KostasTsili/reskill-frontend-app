import ToolBar from "./Utils/ToolBar";
import MobileMenu from "./Utils/MobileMenu";

export default function Header() {

  return (
    <header
      className={`sticky top-0 z-10 w-full h-24  px-8
            flex justify-between items-center 
            bg-white shadow-sm dark:bg-black dark:text-white`}>
          <h2 className="text-black text-lg font-medium">Site Name</h2>
      <nav>
        <ToolBar/>
        <MobileMenu />
      </nav>
    </header>
  );
}
