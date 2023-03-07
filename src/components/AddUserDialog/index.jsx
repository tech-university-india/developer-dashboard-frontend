/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import makeRequest from '../../utils/makeRequest';
import { ADD_USER_URL } from '../../constants/apiEndpoints';
import roles from '../../constants';

function AddUserDialog(props) {
  const {
    isOpen, title, onSubmit, oldUser
  } = props;
  const [open, setOpen] = React.useState(isOpen);
  const [user, setUser] = React.useState(oldUser);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await onSubmit(user);
  };

  useEffect(() => {
    setOpen(isOpen);
    setUser(oldUser);
  }, [isOpen]);

  const handleToClose = () => {
    setOpen(false);
  };
  return (
    <div className="h-40v">
      <Dialog className="flex flex-col items-center" open={open} onClose={handleToClose}>
        <DialogTitle className=" text-center">
          <div className="my-10 font-semibold text-3xl">{title}</div>
        </DialogTitle>
        <div className="bg-slate-50 border-slate-100 mx-10 mb-10">
          <DialogContent
            className="flex flex-row items-center flex-wrap justify-between bg-red"
          >
            <TextField
              className="w-48"
              required
              autoFocus
              onChange={async (value) => {
                setUser({ ...user, firstname: value.target.value });
              }}
              placeholder="First Name"
              margin="normal"
              id="firstname"
              defaultValue={user.firstname}
              type="text"
              variant="outlined"
            />
            <TextField
              className="w-48"
              autoFocus
              margin="normal"
              id="lastname"
              placeholder="Last Name"
              defaultValue={user.lastname}
              type="text"
              variant="outlined"
              onChange={async (value) => {
                setUser({ ...user, lastname: value.target.value });
              }}
            />
            <TextField
              className="w-48"
              autoFocus
              margin="dense"
              id="name"
              placeholder="Email Address"
              type="email"
              variant="outlined"
              defaultValue={user.email}
              onChange={async (value) => {
                setUser({ ...user, email: value.target.value });
              }}
            />
            <TextField
              className="w-48"
              margin="normal"
              id="role"
              select
              label="Role"
              placeholder="Role"
              variant="outlined"
              defaultValue={user.role}
              // value={user.role}
              onChange={async (event) => {
                setUser({ ...user, role: event.target.value });
              }}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}

            </TextField>
            <TextField
              className="w-48"
              autoFocus
              margin="dense"
              id="phone"
              placeholder="Phone Number"
              type="number"
              variant="outlined"
              defaultValue={user.phoneno}
              onChange={async (value) => {
                setUser({ ...user, phoneno: value.target.value });
              }}
            />
            {user.role === 'Developer' && (
              <TextField
                className="w-48"
                autoFocus
                margin="dense"
                id="github"
                placeholder="Github Username"
                type="text"
                variant="outlined"
                defaultValue={user.github}
                onChange={async (value) => {
                  console.log(value.target.value);
                  setUser({ ...user, github: value.target.value });
                }}
              />
            )}
            <div className="flex flex-row items-center justify-end w-full">
              <button
                className="border-2 rounded-2xl border-blue-800 w-24 h-9 my-10 text-blue-800 mr-10"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancel

              </button>
              <div className="flex bg-zinc-400 rounded-2xl w-24 h-9">
                <Button
                  className="w-full"
                  onClick={handleSubmit}
                >
                  <div className="text-white"><p className="capitalize text-center">Submit</p></div>

                </Button>
              </div>
            </div>

          </DialogContent>
        </div>
      </Dialog>

    </div>

  );
}
AddUserDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  oldUser: PropTypes.any
};

export default memo(AddUserDialog);
