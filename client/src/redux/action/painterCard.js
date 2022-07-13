const getPainterCard = (data) => ({ type: 'GET_PAINTER_CARD', payload: data });
const createPainterCard = (data) => ({ type: 'CREATE_PAINTER_CARD', payload: data });
const deletePainterCard = (id) => ({ type: 'DELETE_PAINTER_CARD', payload: id });

export const getPainterCardThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/paintercard`); // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json();
  dispatch(getPainterCard(result));
};

export const createPainterCardThunk = (body) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/paintercard`,
    {
      credentials: 'include',
      method: 'POST',
      body,
    },
  );
  const result = await response.json();
  // console.log(result, 'RESULT_CREATE_PAINTES_CARD');
  dispatch(createPainterCard(result));
};

export const deletePainterCardThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/paintercard/${id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );
  // console.log(response);
  if (response.status === 200) {
    // console.log('response111', id);
    dispatch(deletePainterCard(id));
  }
};
