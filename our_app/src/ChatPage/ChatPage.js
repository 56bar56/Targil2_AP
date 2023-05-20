import ChatSection from "../ChatSection/ChatSection";
import ChatUp from "../ChatUp/ChatUp";
import ContactList from "../ContactList/ContactList";



function ChatPage(props) {
    const chatsUsers= [];
    return (
        <div>
        <ChatUp/>
        <ChatSection users={chatsUsers} info={props.info}/>
        <ContactList users={chatsUsers} info={props.info}/>
        </div>
    );
  }
  export default ChatPage;
  