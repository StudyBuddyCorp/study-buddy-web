import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authReducer } from './reducers/user-slice';
import { userAPI } from './services/user-service';
import { courseAPI } from './services/course-service';
import { specialtyAPI } from './services/specialty-service';
import { departmentAPI } from './services/department-service';
import { groupAPI } from './services/group-service';
import { courseReducer } from './reducers/course-slice';

export const rootReducer = combineReducers({
  authReducer,
  courseReducer: courseReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [courseAPI.reducerPath]: courseAPI.reducer,
  [specialtyAPI.reducerPath]: specialtyAPI.reducer,
  [departmentAPI.reducerPath]: departmentAPI.reducer,
  [groupAPI.reducerPath]: groupAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
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
