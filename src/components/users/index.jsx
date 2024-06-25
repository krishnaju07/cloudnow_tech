import React, { useEffect, useState } from 'react';
import {userListAction} from '../../redux/actions/action'
import MaterialTable from 'material-table';
import { useDispatch } from 'react-redux';

const User = () => {
    const dispatch = useDispatch(); 
    const [data,setData] = useState([])

  useEffect(() => {
    dispatch(userListAction());
  }, [dispatch]);

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
  <div style={{ maxWidth: '100%' }}>
      <MaterialTable columns={columns} data={users} title="User List" />
    </div>
  );
};

export default User;
