import { Course } from "@/entities/course/ICourse";
import { createSlice } from "@reduxjs/toolkit";

type CourseState = {
    course: Course | null;
    isEdited: boolean;
};

const initialState: CourseState = {
    course: null,
    isEdited: false,
};
export const courseSlice = createSlice({
    name: "subscribe",
    initialState,
    reducers: {
        setCourse(state, { payload }: { payload: Course | null }) {
            state.course = payload;
        },
        switchEdited(state) {
            state.isEdited = !state.isEdited;
        },
    },
});
export const courseReducer = courseSlice.reducer;
