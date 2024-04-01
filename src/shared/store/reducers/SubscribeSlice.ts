import { Course } from "@/entities/course/ICourse";
import { createSlice } from "@reduxjs/toolkit";

type CourseState = {
    course: Course | null;
};

const initialState: CourseState = {
    course: null,
};
export const courseSlice = createSlice({
    name: "subscribe",
    initialState,
    reducers: {
        setCourse(state, { payload }: { payload: Course | null }) {
            state.course = payload;
        },
    },
});
export const courseReducer = courseSlice.reducer;
