import React, { useState } from 'react';

function ChatSection() {
  const [messageInputValue, setMessageInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage = messageInputValue.trim();
    if (newMessage !== '') {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInputValue('');
    }
  };

  return (
    <div>
      <div className="content"></div>
      <div className="currentChat">
        <div type="user" className="form-control namechat" id="floatingInputDisabled" disabled>
          <label htmlFor="floatingInputDisabled" className="currentChatUser">
            <img
              src="https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg"
              className="img-fluid rounded-circle"
              width="40"
              height="25"
              alt="User 2"
            />
            Bar
          </label>
        </div>
        <div className="container">
          <ul className="list-message no-dot-list" id="messageList">
            {messages.map((message, index) => (
              <li key={index} className="list-message-item">
                <div className="user2 clearfix">
                  <img
                    src="https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg"
                    className="img-fluid rounded-circle"
                    width="40"
                    height="25"
                    alt="User 2"
                  />
                  <div className="speech-bubble">{message}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form className="currentChatKey input-group mb-3">
          <input
            type="text"
            id="messageInput"
            className="form-control"
            placeholder="enter message ..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={messageInputValue}
            onChange={handleInputChange}
          />
          <button
            type="button"
            id="sendMassege"
            className="btn btn-outline-secondary"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatSection;
