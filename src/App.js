import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path='/Home' component={ Home } />
      </div>
    </Router>
  );
}

export default App;
