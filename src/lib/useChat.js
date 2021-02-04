import {useEffect, useRef, useState} from 'react'
import socketIOClient from 'socket.io-client'
import {config} from './constants'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const SOCKET_SERVER_URL = config.url.API_URL

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Create a websocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: {roomId}
    });

    // Listen for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages(messages => [...messages, incomingMessage]);
    });

    // Destroy the socket reference when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Send a message to the server to forward to all users
  const sendMessage = messageBody => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id
    });
  };

  return {messages, sendMessage};

};

export default useChat;
