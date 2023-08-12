import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../../store/actions/user';
import { UserState } from '../../store/reducers/user/models';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { users } = useSelector((state: any) => state.user) as UserState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div>Dashboard</div>
      <a onClick={() => navigate('/')} className='cursor-pointer'>Navigate to Landing</a>
      <div className='p-5'>
        <strong>Users</strong>
        <ul>
          {users.map((user: any, index: number) => (
            <li key={index}>{index+1}.) {user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;