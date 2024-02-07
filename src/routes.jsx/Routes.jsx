import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Home from '../pages/Home';
import Notes from '../pages/Notes.jsx';
import Download from '../pages/Download.jsx';
import About from '../pages/About.jsx';
import Colab from '../pages/Colab.jsx';


const MyRoutes = () => {
    return (
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
         <Route path="/Blogs" element={<Blogs/>} />
          <Route path='/Stack' element={<Notes documentName='Stack'/>}/>
          <Route path='/Genericidad' element={<Notes documentName='Genericidad'/>}/>
          <Route path='/Queue' element={<Notes documentName='Queue'/>}/>   
          <Route path='/Download' element={<Download/>}/>   
          <Route path='/About' element={<About/>}/>   
          <Route path='/Colab' element={<Colab/>}/>   
        </Routes>
      </div>
    );
}
export default MyRoutes;



