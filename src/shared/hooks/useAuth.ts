import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { authSlice } from "../store/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";

export const useAuth = () => {

    const { toast } = useToast();
    const { handleLoadLocal } = authSlice.actions;
    const { token } = useAppSelector((state) => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(handleLoadLocal());

        if (!localStorage.getItem('token')) {
            navigate("/auth");
            toast({
              title: 'Нет доступа',
              description: 'Вам необходимо войти в аккаунт',
              variant: 'destructive',
            });
        }
    }, [dispatch, handleLoadLocal, navigate, toast, token]);
};
