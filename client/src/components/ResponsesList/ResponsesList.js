import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useParams, Link } from 'react-router-dom';
import getResponsesList from '../../redux/action/responsesList';

function ResponsesList() {
  const list = useSelector((state) => state.responsesList);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getResponsesList(params.id));
  }, []);

  console.log(list, 'LIIIIISSSSSSSTTTTTTTTTTTT');

  return (
    <div>
      {list.map((el) => <Link to={`/user/${el.User.id}`}>{el.User.name}</Link>)}
    </div>
  );
}

export default ResponsesList;
