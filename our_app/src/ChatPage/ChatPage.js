import ChatSection from "../ChatSection/ChatSection";
import ChatUp from "../ChatUp/ChatUp";
import ContactList from "../ContactList/ContactList";


function ChatPage(props) {
    const chats=[];
    chats.push("welcom to our app");
    const chatsUsers= [{name: "newCon", chat: [], task: null }];
    return (
        <div>
        <ChatUp/>
        <ChatSection users={chatsUsers}/>
        <ContactList users={chatsUsers}/>
        </div>
    );
  }
  export default ChatPage;
  