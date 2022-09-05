import './App.css';
import Navbar from './components/Navbar/navbar'
import LoginPage from './components/Login/login';
import RegisterPage from './components/Register/register';
import MainPage from './components/MainPage/mainpage';
import ShowInformation from './components/ShowInfo/showinfo';
import Show from './components/Show/show'
import Favorite from './components/Favorite/favorite';

import {Route, Routes, Navigate} from 'react-router-dom' 
import {useSelector} from 'react-redux'

function App() {
  let user = useSelector(state => state.user.user)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='show/:id' element={user?<ShowInformation/>:<Navigate to="/login"/>}/>
        <Route path='show/:id/ep/:id' element={user?<Show/>:<Navigate to="/login"/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route index path='/' element={user?<MainPage/>:<Navigate to="/login"/>}/>
        <Route path='/favorite' element={user?<Favorite/>:<Navigate to="/login"/>}/>
      </Routes>
    </div>
  );
}

export default App;
