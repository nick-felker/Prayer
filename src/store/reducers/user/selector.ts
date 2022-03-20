import { RootState } from "../../store";
import { userType } from "../../../../types/type";

export const userSelector = (state:RootState) =>
    state.user;