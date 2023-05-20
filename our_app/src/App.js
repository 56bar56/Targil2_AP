import './App.css';
import { useRef } from 'react';
import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import ChatPage from './ChatPage/ChatPage';
function App() {
  const loginDetails = [
    { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
    { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
    { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
  ];
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<LoginScreen info = {loginDetails}/>}></Route>
      <Route path = "/register" element = {<RegisterScreen info = {loginDetails} />}></Route>
      <Route path = "/Chats" element = {<ChatPage info = {loginDetails} />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
