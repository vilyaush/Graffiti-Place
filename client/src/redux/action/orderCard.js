const getOrderCard = (data) => ({ type: 'GET_ORDER_CARD', payload: data });
const createOrderCard = (data) => ({ type: 'CREATE_ORDER_CARD', payload: data });
const deleteOrderCard = (id) => ({ type: 'DELETE_ORDER_CARD', payload: id });

export const getOrderCardThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/ordercard`); // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json();
  dispatch(getOrderCard(result));
};

export const createOrderCardThunk = (body) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/ordercard`,
    {
      credentials: 'include',
      method: 'POST',

      body,
    },
  );
  const result = await response.json();
  dispatch(createOrderCard(result));
};

export const deleteOrderCardThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/ordercard/${id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );
  if (response.status === 200) {
    dispatch(deleteOrderCard(id));
  }
};
