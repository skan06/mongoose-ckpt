import './App.css';
import { Routes,Route } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbr from './components/Navbr';

function App() {
  return (
    <div className="App">
    <Navbr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
  );
}

export default App;
