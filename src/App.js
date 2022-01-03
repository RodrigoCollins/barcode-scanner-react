import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PageNotFound from './pages/PageNotFound';


function App() {


  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
