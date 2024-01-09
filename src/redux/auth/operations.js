import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setAuthorizationToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function clearAuthorizationToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  '/users/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthorizationToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthorizationToken();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const currentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthorizationToken(token);
      try {
        const res = await axios.get('/users/current');
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
    return thunkAPI.rejectWithValue('No token');
  }
);
