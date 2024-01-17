import Home from './routes/Home';
import Contact from './routes/Contact';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/training' element={<Training/>}/>
    </Routes>
    </Router>
  );
}

export default App;
