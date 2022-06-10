import React from 'react';

// import components

import { Route, Routes } from 'react-router-dom';
import ProjectOneDetail from './components/ProjectOneDetail';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectOneDetail></ProjectOneDetail>}></Route>
      </Routes>


    </div>
  );
};

export default App;
