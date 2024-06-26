import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './CardList';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component={CardList} /> 
       
      </Routes>
    </Router>
  );
};

export default App;

