const getPainterCard = (data) => ({type:'GET_PAINTER_CARD', payload: data})
const createPainterCard = (data) => ({type:'CREATE_PAINTER_CARD',payload:data})

export const getPainterCardThunk = () => async (dispatch) => {

  const response = await fetch(`${process.env.REACT_APP_serverApi}/paintercard`,) // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json()
  dispatch(getPainterCard(result))
}

export const createPainterCardThunk = (body) => async (dispatch) => {

  const response = await fetch(`${process.env.REACT_APP_serverApi}/create`,
    {
    credentials : 'include',
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: (body)
    }
  )
  const result = await response.json()
  dispatch(createPainterCard(result))
}  