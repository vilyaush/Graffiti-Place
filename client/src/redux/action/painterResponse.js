const getPainterResponse = (data) => ({ type: 'GET_PAINTER_RESPONSE', payload: data });

const getPainterResponseThunk = (id) => async (dispatch) => {
  // console.log('1111111111111111111111111111111111111111111111111111111111111111111111111111111');
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/response/${id}`,
    {
      credentials: 'include',

    },
  );
  const result = await response.json();
  // console.log(result);
  dispatch(getPainterResponse(result));
  // console.log(result, '++++++++++');
};

export default getPainterResponseThunk;
