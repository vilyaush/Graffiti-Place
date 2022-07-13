import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// import { useCallback } from 'react'

const socket = new WebSocket('ws://localhost:3003');

function Message() {
  const [val, setVal] = useState('');
  const [mess, setMess] = useState([]);
  const { user } = useSelector((state) => state);
   
  useEffect(() => {
    socket.onopen = (e) => {
      console.log('connection');
    };

    socket.onmessage = (event) => {
      console.log(event.data, '====');
      const comment = JSON.parse(event.data);
      console.log(comment);
      setMess((prev) => [...prev, [comment]]);
    };

    socket.onclose = function (event) {
      console.log('closed');
    };
  // return () => {} close connection
  }, []);

  console.log(socket);

  console.log(mess);

  return (
    <div className="chat">
      <form onSubmit={(e) => {
        e.preventDefault();
        socket.send(JSON.stringify({ type: 'formData', payload: [val, user.name] }));
        console.log(socket.send);
        setVal('');
      }}
      >
        <input type="text" value={val} onChange={((e) => setVal(e.target.value))} />
        <button type="submit">send</button>
      </form>
      <div>{mess.map((el) => <p>{el}</p>)}</div>
    </div>
  );
}

export default Message;
