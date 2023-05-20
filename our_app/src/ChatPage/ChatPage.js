import ChatSection from "../ChatSection/ChatSection";
import ChatUp from "../ChatUp/ChatUp";
import ContactList from "../ContactList/ContactList";



function ChatPage(props) {
    return (
        <div>
        <ChatUp/>
        <ChatSection/>
        <ContactList/>
        </div>
    );
  }
  export default ChatPage;
  