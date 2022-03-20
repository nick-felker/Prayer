import { RootState } from "../../store";

export const taskSelector = (state: RootState) =>
    state.task.Tasks;