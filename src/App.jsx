import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUserId } from "./api/auth";

import Home from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import Register from "./Components/RegisterUser";
import LogMeIn from "./Components/LogMeIn";
import Navbar from "./Pages/NavBar";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState('');

  if (localStorage.token && !token) {
    setToken(localStorage.token);
  };

  if (localStorage.userID && !userId) {
    setUserId(localStorage.userID);
  };

  return (
    <div className="App">
      <h1 className="STLOGO">Stranger's Things</h1>
      <Navbar token={ token }/>
      <Routes>
        <Route path='/' 
          element={<Home 
          token={ token } 
          posts={ posts } 
          setPosts={ setPosts }
          userId={ userId }
          setToken={ setToken }/>} 
        />
        {!token &&
          <Route path='/register' element={ <Register setToken={ setToken } /> }/>
        }
        {!token &&
          <Route path='/login' element={ <LogMeIn setToken={ setToken } setUserId={ setUserId } /> } />
        }
        {token &&
          <Route path='profile' element={<Profile token={ token } setToken={ setToken } />} />
        }
        <Route path='*' element={<Navigate replace to='/' />} />
        
      </Routes>
    </div>
  )
}

export default App;
