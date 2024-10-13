<<<<<<< HEAD
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
=======
import ToolBar from './Utils/ToolBar';
import MobileMenu from './Utils/MobileMenu';


export default function Header () {
    return (
          <div className={
           `sticky top-0 z-10 w-full h-40 px-8
            flex justify-between items-center 
            bg-white shadow-sm
            dark:bg-black dark:text-white`
          }>
            <span className='ml-8'><h2>Site Name</h2></span>
            <nav><ToolBar/></nav>
            <MobileMenu/>
        </div>
    )
}
>>>>>>> 1b0721efa6b4c3910715adee8b800f3fe91f5165
