import { createSlice } from "@reduxjs/toolkit";
import { Course } from "@/entities/course";

type SubscribeState = {
    course: Course | null;
};

const initialState: SubscribeState = {
    course: null,
};
export const subscribeSlice = createSlice({
    name: "subscribe",
    initialState,
    reducers: {
        setCourse(state, { payload }: { payload: Course | null }) {
            state.course = payload;
        },
    },
});
export const subscribeReducer = subscribeSlice.reducer;
