import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Scoreboard from './components/Scoreboard';
import Events from './components/Events';
import Reports from './components/Reports';
import React from 'react';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={ <Scoreboard /> } />
          <Route path='/Home' element={ <Home />} />
          <Route path='/Scoreboard' element={ <Scoreboard /> } />
          <Route path='/Events' element={ <Events /> } />
          <Route path='/Reports' element= { <Reports /> } />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
