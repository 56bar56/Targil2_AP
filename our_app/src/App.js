import './App.css';
import { useRef } from 'react';
import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import ChatPage from './ChatPage/ChatPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<LoginScreen />}></Route>
      <Route path = "/register" element = {<RegisterScreen />}></Route>
      <Route path = "/Chats" element = {<ChatPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
