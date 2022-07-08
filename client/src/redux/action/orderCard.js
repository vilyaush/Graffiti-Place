const getOrderCard = (data) => ({type:'GET_ORDER_CARD', payload: data})
const createOrderCard = (data) => ({type:'CREATE_ORDER_CARD',payload:data})

export const getOrderCardThunk = () => async (dispatch) => {

  const response = await fetch(`${process.env.REACT_APP_serverApi}/orderAll`,) // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json()
  dispatch(getOrderCard(result))
}

export const createOrderCardThunk = (body) => async (dispatch) => {
  console.log('77777777777777788888888899999999999877')

  const response = await fetch(`${process.env.REACT_APP_serverApi}/order`,
    {
    credentials : 'include',
    method: 'POST',
   
    body: (body)
    }
  )
  const result = await response.json()
  dispatch(createOrderCard(result))
}  