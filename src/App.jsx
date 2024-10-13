import Header from './components/Header'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SinglePostPage from './components/SinglePostPage';

function App() {

  return (
   <div className="bg-white dark:bg-slate-800 dark:text-white w-full">
    <Header />
    <Routes>
            <Route path="/" element={ <LandingPage/>}/>
            <Route path='/post/:id' element={<SinglePostPage/>}/>
      </Routes>
    <Footer/>
      </div>
  )
}

export default App
