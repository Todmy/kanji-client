import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'
import store from './store';

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>
