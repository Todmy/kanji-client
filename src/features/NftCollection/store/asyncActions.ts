import { setCollection, setLoading, setError, updateCollection } from './slice';
import { NftCollection } from '../dto';
import { AppThunk } from 'app/store.d';
import api from 'app/api';

export const fetchNftCollections = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.get('/nft-collection');
    dispatch(setCollection(response.data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError('An unknown error occured.'));
    }
  } finally {
    dispatch(setLoading(false));
  }
}

export const getNftCollection = (id: string): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.get(`/nft-collection/${id}`);
    dispatch(updateCollection({ id, data: response.data }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError('An unknown error occured.'));
    }
  } finally {
    dispatch(setLoading(false));
  }
}

export const createNftCollection = (data: NftCollection): AppThunk => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const items = getState().nftCollection.data;
  try {
    const response = await api.post(`/nft-collection`, data);
    items.push(response.data);
    dispatch(setCollection(response.data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError('An unknown error occured.'));
    }
  } finally {
    dispatch(setLoading(false));
  }
}

export const deleteNftCollection = (id: string): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.delete(`/nft-collection/${id}`);
    dispatch(updateCollection({ id, data: response.data }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError('An unknown error occured.'));
    }
  } finally {
    dispatch(setLoading(false));
  }
}