import ChatSection from "../ChatSection/ChatSection";
import ChatUp from "../ChatUp/ChatUp";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";


function ChatPage(props) {
    
    const [messages, setMessages] = useState([]);
    const [chatState, setchatState]= useState(-1);
    const [nameTop, setnameTop]= useState('');
    const [chatsUsers,setchatsUsers]= useState([]);
    return (
        <div>
        <ChatUp/>
        <ChatSection users={chatsUsers} info={props.info} chatMessages={messages} chatSetMessage={setMessages} chatState = {chatState} nameTop={nameTop}/>
        <ContactList users={chatsUsers} setUsers={setchatsUsers} info={props.info} chatSetMessage={setMessages} setchatState={setchatState} chatState = {chatState} setnameTop={setnameTop}/>
        </div>
    );
  }
  export default ChatPage;
  