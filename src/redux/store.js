import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
} from "./reducers/videosReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import {
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
} from "./reducers/videosReducer";
import { commentListReducer } from "./reducers/comments.reducer";
// const initialState = {
//   name: "Name",
//   age: "21",
// };

// const reducer = (initialState) => initialState;
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  channelDetails: channelDetailsReducer,
  selectedVideo: selectedVideoReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});

const store = legacy_createStore(
  //reducer,
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)) //compose... for time-travel in dev-tools
);

export default store;

//store
//act..
//reducer
//..ion
