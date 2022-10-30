import { React, useEffect, useState } from "react";
import GoogleSignIn from "../GoogleSignIn";
import Layout from "../../Layout";
import HomeScreen from "../HomeScreen";
import { Route, Routes, useNavigate } from "react-router-dom";

function NewMovies() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if(!isLoggedIn) {
        navigate('/signin');
    } else {
    navigate('/home')
    }
  }, [isLoggedIn, navigate])
  
  
  const onUserLoggedIn = (userInfo) => {
    if (!userInfo) {
      return;
    }
    setUserInfo(userInfo);
    setIsLoggedIn(true);
    console.log(userInfo);
  };
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn && (
            <>
              <Route path="home" index element={<HomeScreen />}></Route>
            </>
          )}
          {!isLoggedIn && (
             <Route path="signin" index element={<GoogleSignIn onUserLoggedIn={onUserLoggedIn} />}></Route>
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default NewMovies;
