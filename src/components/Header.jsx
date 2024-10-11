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