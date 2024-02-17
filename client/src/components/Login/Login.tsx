import { FC } from "react";
import styles from './Login.module.css';
import { AppDispatch } from "../../state/state";
import { hideShowProfile } from '../../state/menuSlice';
import { Link, useNavigate } from "react-router-dom";
import notification from "../../services/notification";
import { useDispatch } from "react-redux";
import { LoginData } from "../../types/User";
import { login } from "../../state/users/authSlice";
import { loginValidator } from "../../services/validation";
import useValidate from "../../hooks/useValidate";
import useForm from "../../hooks/useForm";
import { loginMessages } from "../../services/validationMessages";

const Login : FC = () : JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onLoginSubmit = (data: LoginData) => {
        dispatch(login(data));
        dispatch(hideShowProfile());
        notification.success('Login Successful', 3000);
        navigate('/');
    };

    const primaryValues = {
        email: '',
        password: '',
    };

    const primaryValidationValues = {
        email: false,
        password: false,
    };

    const { values, onChange, onSubmit } = useForm(primaryValues, onLoginSubmit);

    const {
        onBlur, validationErrors
    } = useValidate(primaryValidationValues, values, loginValidator);

    const disabled = Object.values(values).some(x => x === "") || Object.values(validationErrors).some(x => x);

   

    return (
        <section id="loginPage" className={styles.loginPage}>
            <form className={styles.loginForm} onSubmit={onSubmit} method='POST'>
                <div>
                    <label
                        htmlFor="email">
                        Email:
                    </label>
                    <input
                        onChange={onChange}
                        onBlur={onBlur}
                        className={validationErrors.email ? styles.warning : ''}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="example@email.com"
                        value={values.email}
                    />
                    {
                        validationErrors.email ?
                            <p className={styles['validation-message']}>
                                {loginMessages.email}
                            </p>
                            : null
                    }
                </div>
                <div>
                    <label
                        htmlFor="password">
                        Password:
                    </label>
                    <input
                        onChange={onChange}
                        onBlur={onBlur}
                        className={validationErrors.password ? styles.warning : ''}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        value={values.password}
                    />
                      {
                        validationErrors.password ?
                            <p className={styles['validation-message']}>
                                {loginMessages.password}
                            </p>
                            : null
                    }
                </div>
                <button className={styles.button} disabled={disabled} type="submit">{!validationErrors ? 'Loading...' : 'Sign up'}</button>
                <p className={styles.field}>
                    <span>Sign up <Link to={'/register'} className={styles['log-btn']}>here</Link></span>
                </p>
            </form>
        </section>
    )
};

export default Login;