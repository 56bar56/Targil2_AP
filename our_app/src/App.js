import './App.css';
import { useRef } from 'react';
import {BrowserRouter , Routes, Route, Link}  from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import RegisterScreen from './RegisterScreen/RegisterScreen';
import ChatPage from './ChatPage/ChatPage';
function App() {
  const loginDetails = [
    { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "https://cdn.vox-cdn.com/thumbor/91C8cGj1i1h9VlMayTiAorSoDpI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22879573/1235519898.jpg" },
    { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg" },
    { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "https://static01.nyt.com/images/2021/04/29/sports/29soccer-lewandowski/29soccer-lewandowski-mediumSquareAt3X.jpg" }
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
