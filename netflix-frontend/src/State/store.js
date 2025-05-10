import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Authentication/Reducer";

// Auth Reducer for authentication actions// Adjust path as necessary

// You can add other reducers for different parts of the Netflix app, like video, user profile, etc.
//import videoReducer from "./Video/Reducer"; // Placeholder for video-related actions (e.g., fetching movies)
//import userProfileReducer from "./UserProfile/Reducer"; // Placeholder for user profile data, etc.

const rootReducer = combineReducers({
  auth: authReducer,              // Authentication state
 // video: videoReducer,            // Video state (for handling movies, videos)
  //userProfile: userProfileReducer, // User profile state (for user details, preferences)
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
