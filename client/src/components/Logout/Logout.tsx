import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../state/users/authSlice";
import { AppDispatch } from "../../state/state";


const Logout : FC = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    dispatch(logout());


    return <Navigate to='/'/>
};

export default Logout;

