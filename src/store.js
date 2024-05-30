import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for named export
import { composeWithDevTools } from 'redux-devtools-extension';
import { listingListReducer } from './reducers/listingReducer';
import { modalReducer } from './reducers/modalReducer';
import { userLoginReducer } from './reducers/userReducer';

// Combine reducers
const reducer = combineReducers({
  listingList: listingListReducer, // Ensure camelCase for consistency
  modal: modalReducer,
  userLogin: userLoginReducer,
});

// Initial state setup from localStorage
const userInfoFromLS = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

// Middleware setup
const middleware = [thunk];

// Create store with middleware and DevTools
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
