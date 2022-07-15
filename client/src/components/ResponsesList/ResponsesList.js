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

  // console.log(list, 'LIIIIISSSSSSSTTTTTTTTTTTT');

  return (
    <div className="card">
      <div className="response-painter">
        {' '}
        {list.length > 0 ? list.map((el) => (
          <div className="solo-card">
            <img className="card-img-cabinet" alt="Сдесь должна быть фотография" src={`${process.env.REACT_APP_serverApi}/img/${el.User.img}`} />
            <button className="cardButton"><Link key={nanoid()} to={`/user/${el.User.id}`}>{el.User.name }</Link></button>
          </div>
        )) : 'Пока никто не откликнулся'}
      </div>
      <button className="regButton">
        <Link to="/personalarea">Назад</Link>
      </button>
    </div>
  );
}

// return (
//   <div>
//     {list.length > 0 ? list.map((el) => (
//       <>
//         <div>
//           <Link key={nanoid()} to={/user/${el.User.id}}>{el.User.name}</Link>
//         </div>

//       </>
//     )) : 'Пока никто не откликнулся'}
//     >

//   </div>

// );
export default ResponsesList;
