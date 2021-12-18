import { createAction } from "redux-actions";

export const CREATE_TASK = createAction("CREATE_TASK");
export const DELETE_TASK = createAction("DELETE_TASK");
export const SET_EDIT_MODE = createAction("SET_EDIT_MODE");
export const SAVE_EDITED_TASK = createAction("SAVE_EDITED_TASK");
// export const DISCARD_CHANGES = createAction("DISCARD_CHANGES");
