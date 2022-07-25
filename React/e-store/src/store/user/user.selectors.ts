import { createSelector } from "reselect";
import { USER_STATE } from "./user.reducer";

export const selectUserReducer = (state):USER_STATE => state.user;

export const selectCurrentUser = createSelector(selectUserReducer,(user)=>user.currentUser);