
import Header from './header';
import About from './about';
import Careers from './careers';
import Contact from './contact';
import Sidebar from './sidebar';
import Footer from './footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';

 const navitems=[
  {
    name:"Home",
    path:"/",
  },
  {
    name:"About",
    path:"/about",
  },
  {
    name:"Careers",
    path:"/careers",
  },
  {
    name:"Contact",
    path:"/contact",
  },
 ];
 const sideitems=["Overview","Summary","installation","Components","Features","Versions","about-company"]

function App() {
  return (
    <>
    <header>
      <Header navItem={navitems}/>
    </header>
   <section className="main-container d-flex ">
   <aside className="border-right side-container d-flex">
      <Sidebar Sideitems={sideitems}/>

    </aside>
    <main className="main-content d-flex">
      <Routes>
        <Route path="/" element={<>this is home page</>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </main>
   


    </section> 
    <footer>
      <Footer/>
    </footer>
    

    </>
  ) 
}

export default App;
