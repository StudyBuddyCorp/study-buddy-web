import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { authSlice } from "../store/reducers/UserSlice";

export const useAuth = () => {
  const { handleLoadLocal } = authSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(handleLoadLocal());
  }, [dispatch, handleLoadLocal]);
};
