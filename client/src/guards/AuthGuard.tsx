
import { ReactPropTypes } from "react";
import { Navigate } from "react-router-dom";

export default function AdminGuard(props : ReactPropTypes) {



    return <Navigate to={'/'}/>

}