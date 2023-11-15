import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Reservation from './Pages/reservation/Reservation';
import Accuil from './Pages/accuil/Accuil';
import Studio from './Pages/studio/Studio';
import Beauty from './Pages/beautyPage/Beauty';
import Dec from './Pages/decPage/Dec';
import Shop from './Pages/shopPage/Shop';


function App() {
  return (
   <Routes>
    <Route path='/' element={<Accuil/>}/>
    <Route path='/Studio' element={<Studio/>}/>
    <Route path='/Beauty' element={<Beauty/>}/>
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/Decoration' element={<Dec/>}/>
    <Route path='/Reservation' element={<Reservation/>}/>
   </Routes>
  );
}

export default App;
