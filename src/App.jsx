import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import PageNotFound from './Components/PageNotFound';
import UserInfo from './Components/UserInfo';

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<UserInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default App
