import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './veiws/Home/Home';
import Landing from './veiws/Landing/Landing';
import Details from './components/Details/Details';
import Form from './components/Form/Form';


function App() {
  return (
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Landing/>}/>
    <Route path='/country/:id' element={<Details/>}/>
    <Route path='/activity' element={<Form/>}/>
  </Routes>
  
  );
}

export default App;
