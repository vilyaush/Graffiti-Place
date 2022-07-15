import React, { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useChatContext } from '../Context/Context';

// import { useCallback } from 'react'

function Message() {
  const [val, setVal] = useState('');
  const { user } = useSelector((state) => state);

  const { socket, mess } = useChatContext();
  useEffect(() => {

    // return () => {} close connection
  }, [mess]);

  console.log(mess);

  //   console.log(mess);

  return (
    <div className="chat">
      <form onSubmit={(e) => {
        e.preventDefault();
        socket.send(JSON.stringify({ type: 'getOne', payload: { text: val, user: user.name } }));
        // console.log(socket.send);
        setVal('');
      }}
      >
        <input className="chat-input" type="text" value={val} onChange={((e) => setVal(e.target.value))} />
        <button className="chat-butn" type="submit">Отправить</button>
      </form>
      <div className="chat-tbl">
        {mess && mess.map((el) => (
          <p key={el.id}>
            {user.name}
            :
            {el.text}
          </p>
        ))}
      </div>

    </div>
  );
}

export default Message;
