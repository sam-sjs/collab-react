import React, {useState} from 'react'
import useChat from '../lib/useChat'
import './ChatRoom.css'

const ChatRoom = (props) => {

  const roomId = props.projectId;
  const {messages, sendMessage} = useChat(roomId);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return(
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
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
        </ol>
      </div>
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
  );
};

export default ChatRoom
