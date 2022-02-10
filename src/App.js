import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' render={ (props) => ( <></> )} />
          <Route path='/Home' component={ Home } />
          <Route path='/Scoreboard' component={ Scoreboard } />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
