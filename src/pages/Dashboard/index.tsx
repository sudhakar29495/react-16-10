import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../../store/actions/user';
import { UserState } from '../../store/reducers/user/models';

const Dashboard = () => {
  const { users, isLoading, error } = useSelector((state: any) => state.user) as UserState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user: any, index: number) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Dashboard;