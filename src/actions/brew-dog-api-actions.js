
export function fetchProducts() {
  return dispatch => {
  dispatch(fetchProductsBegin());
  fetch("https://api.punkapi.com/v2/beers")
  .then(res => res.json())
  .then(
    (result) => {
      dispatch(fetchProductsSuccess(result));
      return result;
    },
    (error) => {
      dispatch(fetchProductsFailure(error))
    }
  )
  }
}

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});