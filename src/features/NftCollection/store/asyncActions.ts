import { setCollectionSet, setLoading, setError, updateCollection, addCollection } from './slice';
import { NftCollectionDO } from '../interfaces';
import { AppThunk } from 'app/store.d';
import api from 'app/api';

export const fetchNftCollections = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.get('/nft-collection');
    dispatch(setCollectionSet(response.data));
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
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unknown error occured.';
    }
    dispatch(setError(errorMessage));
    throw new Error(errorMessage);
  } finally {
    dispatch(setLoading(false));
  }
}

export const createNftCollection = (data: NftCollectionDO): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!data.picture) {
      delete data.picture;
    }
    const formData = jsonToFormData(data);
    const response = await api.post(`/nft-collection`, formData);
    dispatch(addCollection(response.data));
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unknown error occured.';
    }
    dispatch(setError(errorMessage));
    throw new Error(errorMessage);
  } finally {
    dispatch(setLoading(false));
  }
}

export const updateNftCollection = (id: string, data: NftCollectionDO): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    if (typeof data.picture === 'string') {
      delete data.picture;
    }
    const formData = jsonToFormData(data);
    const response = await api.put(`/nft-collection/${id}`, formData);
    dispatch(updateCollection({ id, data: response.data }));
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unknown error occured.';
    }
    dispatch(setError(errorMessage));
    throw new Error(errorMessage);
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
    let errorMessage;
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unknown error occured.';
    }
    dispatch(setError(errorMessage));
    throw new Error(errorMessage);
  } finally {
    dispatch(setLoading(false));
  }
}
// type constraints
const jsonToFormData = (json: any) => {
  const formData = new FormData();
  Object.keys(json).forEach((key) => {
    formData.append(key, json[key]);
  });
  return formData;
}