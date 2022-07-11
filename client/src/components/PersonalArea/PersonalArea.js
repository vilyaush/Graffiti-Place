import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const PersonalArea = () => {

  const user = useSelector((state) => state.user)

  console.log(user)

  return (
    <div>dddddddddd</div>
  )
}

export default PersonalArea