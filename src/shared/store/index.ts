import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer } from "./reducers/UserSlice";
import { userAPI } from "./services/UserService";
import { courseAPI } from "./services/CourseService";
import { specialtyAPI } from "./services/SpecialtyService";
import { departmentAPI } from "./services/DepartmentService";
import { groupAPI } from "./services/GroupService";
import { courseReducer } from "./reducers/SubscribeSlice";

export const rootReducer = combineReducers({
    authReducer,
    subscribeReducer: courseReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [courseAPI.reducerPath]: courseAPI.reducer,
    [specialtyAPI.reducerPath]: specialtyAPI.reducer,
    [departmentAPI.reducerPath]: departmentAPI.reducer,
    [groupAPI.reducerPath]: groupAPI.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userAPI.middleware,
            courseAPI.middleware,
            specialtyAPI.middleware,
            departmentAPI.middleware,
            groupAPI.middleware,
        ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
