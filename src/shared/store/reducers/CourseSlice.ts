import { Course } from "@/entities/course/ICourse";
import { createSlice } from "@reduxjs/toolkit";
import { courseAPI } from "../services/CourseService";

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
    extraReducers: (builder) =>
        builder.addMatcher(
            courseAPI.endpoints.delete.matchFulfilled,
            (state) => {
                state.course = null;
            },
        ),
});
export const courseReducer = courseSlice.reducer;
