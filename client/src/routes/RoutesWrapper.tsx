import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Default from "../components/Default/Default";
import Contacts from '../components/Contacts/Contacts'
import Booking from "../components/Booking/Booking";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Logout from "../components/Logout/Logout";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/EditProfile/EditProfile";
import Comments from "../components/Comments/Comments";
import Upload from "../components/Upload/Upload";
import Gallery from "../components/Gallery/Gallery";

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/upload' element={<Upload />} />

            <Route path='/gallery/:id/comments' element={<Comments />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/profile/edit/:id' element={<EditProfile />} />

            
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='*' element={<Default />} />
        </Routes>
    );
};