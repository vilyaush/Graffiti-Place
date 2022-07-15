const getResponsesList = (data) => ({ type: 'GET_RESPONSES_LIST', payload: data });

const getResponsesListThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/responselist/${id}`,
    {
      credentials: 'include',

    },
  );
  const result = await response.json();
  dispatch(getResponsesList(result));
};

export default getResponsesListThunk;
