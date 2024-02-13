import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Default from "../components/Default/Default";

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Default />} />
        </Routes>
    );
};