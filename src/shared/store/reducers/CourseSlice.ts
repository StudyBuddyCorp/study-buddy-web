import { Course } from "@/entities/course/ICourse";
import { createSlice } from "@reduxjs/toolkit";
import { courseAPI } from "../services/CourseService";

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
    extraReducers: (builder) =>
        builder.addMatcher(
            courseAPI.endpoints.delete.matchFulfilled,
            (state) => {
                state.course = null;
                state.isEdited = false;
            },
        ),
});
export const courseReducer = courseSlice.reducer;
