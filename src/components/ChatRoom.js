import React, {useState} from 'react'
import useChat from '../lib/useChat'

const ChatRoom = (props) => {

  const {_id: roomId, name} = props.project;
  const {messages, sendMessage} = useChat(roomId);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return(
    <div className="chat-room-container">
      <h3 className="room-name">Room: {name}</h3>
      <div className="messages-container">
        <ul className="messages-list">
          {
            messages.map((m, i) => (
              <li
                key={i}
                className={`message-item ${
                  m.ownedByCurrentUser ? 'my-message' : 'received-message'
                }`}
              >
                {m.body}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="chat-input">
        <textarea
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom
