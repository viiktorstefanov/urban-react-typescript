import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Default from "../components/Default/Default";
import Contacts from '../components/Contacts/Contacts'
import Booking from "../components/Booking/Booking";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Logout from "../components/Logout/Logout";

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='*' element={<Default />} />
        </Routes>
    );
};