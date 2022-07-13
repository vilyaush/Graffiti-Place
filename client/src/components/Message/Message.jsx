import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useChatContext } from '../Context/Context';

// import { useCallback } from 'react'

function Message() {
  const [val, setVal] = useState('');
  const [mess, setMess] = useState([]);
  const { user } = useSelector((state) => state);

  const socket = useContext(useChatContext);
  //   useEffect(() => {

  //   // return () => {} close connection
  //   }, []);

  console.log(socket);

//   console.log(mess);

  return (
    <div className="chat">
      <form onSubmit={(e) => {
        e.preventDefault();
        socket.send(JSON.stringify({ type: 'formData', payload: [val, user.name] }));
        // console.log(socket.send);
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
