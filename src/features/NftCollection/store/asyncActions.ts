import { AppThunk } from 'app/store.d';
import { setCollection } from './slice';

export const fetchNftCollections = (): AppThunk => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/nft-collection");
  const data = await response.json();
  dispatch(setCollection(data));
}
