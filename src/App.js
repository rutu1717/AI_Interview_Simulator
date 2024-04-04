import './App.css';
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'
import Login from './Pages/Login';
import Success from './Pages/Success';
import LandingPage from './Pages/LandingPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/success' element={<Success />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
