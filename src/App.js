import react from 'react';
import './App.css';
import Navbar from './Projectsite/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './Projectsite/Home';
import About from './Projectsite/About';
import Services from './Projectsite/Services';
import Contact from './Projectsite/Contact';
import Login from './Projectsite/Login';
import Signup from './Projectsite/Signup';
import Error from './Projectsite/Error';
const App =()=>{
    return(
        <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route  path="/*" element={<Error/>}/>
    </Routes>
</>
    )
}

export default App;
