import './index.css';
import React from "react";
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './sections/HeroSection';
import AuthScreen from './Pages/home/AuthScreen';
import HomeScreen from './Pages/home/HomeScreen';
import NotFoundPage from './Pages/NotFoundpage';
import SearchPage from './Pages/SearchPage';
//import SearchHistoryIcon from './Pages/SearchHistoryPage';
import WatchPage from './Pages/WatchPage';
import SearchHistoryPage from './Pages/SearchHistoryPage';
import Navbar from './components/Navbar';
import MovieSlider from './components/MovieSlider';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<HeroSection/>}/>
      <Route path='/signin' element={<HeroSection/>}/>
      <Route path='/authscreen' element={<AuthScreen/>}/>
      <Route path='/homescreen' element={<HomeScreen/>}/>
	    <Route path='/four' element={<NotFoundPage/>}/>
      <Route path='/searchhistory' element={<SearchHistoryPage/>}/>
      <Route path='/watch' element={<WatchPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/movie' element={<MovieSlider/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
