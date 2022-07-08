const getOrderCard = (data) => ({type:'GET_ORDER_CARD', payload: data})
const createOrderCard = (data) => ({type:'CREATE_ORDER_CARD',payload:data})

export const getOrderCardThunk = () => async (dispatch) => {

  const response = await fetch(`${process.env.REACT_APP_serverApi}/order`,) // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json()
  dispatch(getOrderCard(result))
}

export const createOrderCardThunk = (body) => async (dispatch) => {

  const response = await fetch(`${process.env.REACT_APP_serverApi}/order`,
    {
    credentials : 'include',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
    }
  )
  const result = await response.json()
  dispatch(createOrderCard(result))
}  