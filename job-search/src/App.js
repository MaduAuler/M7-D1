import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Company from './components/Company';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path='/:company' element={<Company/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
