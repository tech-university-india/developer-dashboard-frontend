/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddUserDialog from '../../components/AddUserDialog';

import Navbar from '../../components/Navbar';
import CustomizedTables from '../../components/Table';
import { ADD_USER_URL, GET_USERS_URL, UPDATE_USER_BY_ID_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(editUser);
  //   setIsEdit(true);
  // }, [editUser]);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const getAllUsers = async () => {
    const newUsers = await makeRequest(GET_USERS_URL);
    setUsers(newUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUser = async (user) => {
    setIsOpen(!isOpen);
    const newUser = await makeRequest(ADD_USER_URL, navigate, { data: { ...user } });
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = async (user) => {
    setEditUser(user);
    setIsEdit(true);
  };

  const updateUser = async (user) => {
    setIsEdit(!isEdit);
    const newUser = await makeRequest(UPDATE_USER_BY_ID_URL, navigate, { data: { ...user } });
    const index = users.findIndex((element) => element.id === newUser.id);
    setUsers([
      ...users.slice(0, index),
      newUser,
      ...users.slice(index + 1)
    ]);
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col w-4/5 ">
        <h1 className="my-8 text-2xl">User Management</h1>
        <div className="flex flex-row h-24 justify-end">
          <button
            className="border-[3px] rounded-2xl border-[rgb(39,29,226)] w-28 h-10 my-10"
            type="button"
            onClick={handleClickOpen}
          >
            <p className="text-blue-800">Add User</p>
          </button>
          <AddUserDialog onSubmit={addUser} title="Add User" isOpen={isOpen} setOpen={setIsOpen} />
          <AddUserDialog onSubmit={updateUser} title="Edit User" oldUser={editUser} isOpen={isEdit} setOpen={setIsEdit} />
        </div>
        <CustomizedTables handleUpdateUser={handleUpdateUser} users={users} />
      </div>
    </div>
  );
}

export default AdminDashboard;
