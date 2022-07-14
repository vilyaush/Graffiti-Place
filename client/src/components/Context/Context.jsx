/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useState, useEffect, useCallback, useMemo, useContext,
} from 'react';
import { useSelector } from 'react-redux';

const ChatContext = createContext();
// eslint-disable-next-line react/prop-types
export default function ChatContextProvider({ children }) {
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3003'));
  const [mess, setMess] = useState([]);
  // const { id } = useSelector((state) => state.user);
  socket.onopen = (e) => {
    console.log('connection');
    // useEffect(() => {
    // socket.send(JSON.stringify({ type: 'postAll', payload: {} }));
    // });
  };

  socket.onmessage = (event) => {
    console.log(event.data, '====');
    const message = JSON.parse(event.data);
    const { type, payload } = message;
    switch (type) {
      case 'postAll':
        setMess(payload);

        break;

      default:
        console.log(type);

        break;
    }
  };

  socket.onclose = function (event) {
    console.log('closed');
  };

  // useEffect(() => {
  //   setSocket(new WebSocket('ws://localhost:3003'));
  // }, [id]);

  console.log('context', mess);
  return (

    <ChatContext.Provider value={{ socket, mess }}>

      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
