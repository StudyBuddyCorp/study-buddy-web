import { Course } from "@/entities/course/ICourse";
import { createSlice } from "@reduxjs/toolkit";
import { courseAPI } from "../services/CourseService";

type CourseState = {
    course: Course | null;
    isEditing: boolean;
};

const initialState: CourseState = {
    course: null,
    isEditing: false,
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourse(state, { payload }: { payload: Course | null }) {
            state.course = payload;
        },
        handleEditing(state) {
            state.isEditing = !state.isEditing
        }
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
