

import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Game from './components/game'
import Great from './components/great'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
         <ul style={{display:'flex'}}>
          <Link to="/">
            <li style={{listStyle:'none',marginLeft:30}}>Game</li>
          </Link>
          <Link to="/Great">
            <li style={{listStyle:'none',marginLeft:30}}>Great</li>
          </Link>
         </ul>
        
        <Routes>
          <Route path="/" element={<Game />}/>
          <Route path="/Great" element={<Great />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
