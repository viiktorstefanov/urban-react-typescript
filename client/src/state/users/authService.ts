import { get, post, del, put } from '../../services/request';
import { LoginData, RegisterData, User } from '../../types/User';


const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    edit: '/users/edit/',
    delete: '/users/',
    reservations: '/users/reservations/',
};

const login = async (data : LoginData) => await post(endpoints.login, data);

const register = async (data: RegisterData) => await post(endpoints.register, data);

const logout = async (user: User) => await get(endpoints.logout,null, user);

// const userEdit = async (data, user : User) => await put(endpoints.edit + user._id, data, user);

// const userDelete = async (user) => await del(endpoints.delete + user._id, null, user);

// const userUpdateReservations = async (id, reservation, user) => await put(endpoints.reservations + id, reservation, user);

// const getAllUserReservations = async () => await get(endpoints.reservations);

const authService = {
    login,
    register,
    logout,
    // userEdit,
    // userDelete,
    // userUpdateReservations,
    // getAllUserReservations,
};

export default authService;