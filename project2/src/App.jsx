import React from 'react'
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Homebar from './components/home/Homebar';
import Focusbar from './components/focusbar/Focusbar'
import Home from './components/home/Home';
import Meeting from './components/pages/Meeting'
import Items from './components/pages/Items'
import Actions from './components/pages/Actions';

function App() {
  return (
    <div className="App">
       <Homebar/>
       <Focusbar/>
       <Routes>
        <Route path='' element={<Home/>}/>
        <Route path={'/meeting'} element={<Meeting/>}/>
        <Route path={'/items'} element={<Items/>}/>
        <Route path={'/actions'} element={<Actions/>}/>
       </Routes>
    </div>
  );
}

export default App;
