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
  const getAllUsers = async () => {
    const newUsers = await makeRequest(GET_USERS_URL);
    setUsers(newUsers);
  };
  const handleAddUser = () => {
    setIsOpen(!isOpen);
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
    setIsEdit(true);
    setEditUser(user);
  };
  const updateUser = async (user) => {
    setIsEdit(!isEdit);
    console.log(user);
    const newUser = await makeRequest(UPDATE_USER_BY_ID_URL, navigate, { data: { ...user } });
    const index = users.findIndex((element) => element.id === newUser.id);
    console.log(index);
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
        <div className="flex flex-row justify-end">
          <button
            className="border-2 rounded-xl border-blue-800 w-1/6 h-7 my-10"
            type="button"
            onClick={handleAddUser}
          >
            <p className="text-blue-800">Add User</p>
          </button>
          <AddUserDialog onSubmit={addUser} title="Add User" oldUser={{}} isOpen={isOpen} />
          <AddUserDialog onSubmit={updateUser} title="Edit User" oldUser={editUser} isOpen={isEdit} />
        </div>
        <CustomizedTables handleUpdateUser={handleUpdateUser} users={users} />
      </div>
    </div>
  );
}

export default AdminDashboard;
