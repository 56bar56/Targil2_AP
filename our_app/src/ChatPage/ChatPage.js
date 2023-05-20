import ChatSection from "../ChatSection/ChatSection";
import ChatUp from "../ChatUp/ChatUp";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";


function ChatPage(props) {
    const [messages, setMessages] = useState([]);
    const [chatState, setchatState]= useState(0);
    const chatsUsers= [];
    return (
        <div>
        <ChatUp/>
        <ChatSection users={chatsUsers} info={props.info} chatMessages={messages} chatSetMessage={setMessages} chatState= {chatState}/>
        <ContactList users={chatsUsers} info={props.info} chatSetMessage={setMessages} chatSetState={setchatState}/>
        </div>
    );
  }
  export default ChatPage;
  