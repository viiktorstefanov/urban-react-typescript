import { useContext } from "react"

import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {

        return <Navigate to={'/login'}/>

    return <Outlet/>
};