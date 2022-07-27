import { createSelector } from "reselect";
import { USER_STATE } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReducer = (state:RootState):USER_STATE => state.user;

export const selectCurrentUser = createSelector(selectUserReducer,(user)=>user.currentUser);