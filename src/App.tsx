import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import store, { AppDispatch } from './store/store'
import { getRandomJokeAsync, getSearchedJokesAsync } from './store/actions/jokes';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync } from './store/actions/categories';
import Home from './pages/Home/Home'

const App: React.FC = () => {

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
