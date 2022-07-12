import React from 'react'

function Message() {
  return (
    <div>
        <input placeholder='введите сообщение'/>
        <button type="submit">Отправить</button>
        <input type='hidden'/>
    </div>
  )
}

export default Message