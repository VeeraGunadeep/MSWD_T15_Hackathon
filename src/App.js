import './App.css';
// import Navbar from "./components/Navbar"
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import About from './routes/About';
// import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';

import Explore from './routes/Explore';
import Math from './routes/Math';
import Login from './routes/Login';
import AndhraPradesh from './components/States/AndhraPradesh';
import Assam from './components/States/Assam';
import Bihar from './components/States/bihar';


import ArunachalPradesh from './components/States/ArunachalPradesh';




function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      {/* <Route path="/service" element={ <Service/>}/> */}
      <Route path="/contact" element={ <Contact/>}/>
 \
      <Route path="/signup" element={ <SignUp/>}/>
      <Route path="/login" element={ <Login/>}/>
     
      <Route path="/explore" element={ <Explore/>}/>
      <Route path="/math" element={<Math />}/>
      <Route path="/andhrapradesh" element={<AndhraPradesh/>}/>
      <Route path="/assam" element={<Assam/>}/>
      <Route path="/bihar" element={<Bihar/>}/>
      <Route path="/arunachalpradesh" element={<ArunachalPradesh/>}/>
     </Routes>
 

      
    </div>
  );
}

export default App;
