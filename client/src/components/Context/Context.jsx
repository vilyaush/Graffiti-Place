import React, {
  createContext, useState, useEffect, useCallback, useMemo, useContext,
} from 'react';

const ChatContext = createContext();
// eslint-disable-next-line react/prop-types
export default function ChatContextProvider({ children }) {
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3003'));

  socket.onopen = (e) => {
    console.log('connection');
  };

  socket.onmessage = (event) => {
    console.log(event.data, '====');
    const comment = JSON.parse(event.data);
    // console.log(comment);
    // eslint-disable-next-line no-undef
    setMess((prev) => [...prev, [comment]]);
  };

  socket.onclose = function (event) {
    console.log('closed');
  };
  return (

    <ChatContext.Provider value={socket}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
