import { FC } from "react";
import styles from './Register.module.css';
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import useValidate from "../../hooks/useValidate";
import { registerValidator } from "../../services/validation";
import { Link } from "react-router-dom";
import { registerMessages } from "../../services/validationMessages";
import { RegisterData } from "../../types/User";
import { register } from "../../state/users/authSlice";
import { AppDispatch } from "../../state/state";
import { hideShowProfile } from '../../state/menuSlice';
import { useNavigate } from "react-router-dom";
import notification from "../../services/notification";

const Register : FC = () : JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onRegisterSubmit = (data : RegisterData) => {
        dispatch(register(data));
        dispatch(hideShowProfile());
        notification.success('Register Successful', 3000);
        navigate('/');
    }

    const primaryValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        phone: '',
    };

    const primaryValidationValues = {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        repeatPassword: false,
        phone: false,
    };

    const { values, onChange, onSubmit } = useForm(primaryValues, onRegisterSubmit);

    const {
        onBlur, validationErrors
    } = useValidate(primaryValidationValues, values, registerValidator);

    const disabled = Object.values(values).some(x => x === "") || Object.values(validationErrors).some(x => x);

    return (
        <section id="registerPage" className={styles.registerPage}>
            <form onSubmit={onSubmit} className={styles.registerForm} method='POST'>
                <div>
                    <label
                        htmlFor="name">
                        First name:
                    </label>
                    <input
                        className={validationErrors.firstName ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        value={values.firstName}
                    />
                     {
                        validationErrors.firstName ?
                            <p className={styles['validation-message']}>
                                {registerMessages.firstName}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="name">
                        Last name:
                    </label>
                    <input
                        className={validationErrors.lastName ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        value={values.lastName}
                    />
                    {
                        validationErrors.lastName ?
                            <p className={styles['validation-message']}>
                                {registerMessages.lastName}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="email">
                        Email:
                    </label>
                    <input
                        onChange={onChange}
                        className={validationErrors.email ? styles.warning : ''}
                        onBlur={onBlur}
                        id="email"
                        name="email"
                        type="text"
                        value={values.email}
                        placeholder="example@email.com"
                    />
                    {
                        validationErrors.email ?
                            <p className={styles['validation-message']}>
                                {registerMessages.email}
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
                        className={validationErrors.password ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="New password"
                        value={values.password}
                    />
                    {
                        validationErrors.password ?
                            <p className={styles['validation-message']}>
                                {registerMessages.password}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="repeatPassword">
                        Repeat Password:
                    </label>
                    <input
                        className={validationErrors.repeatPassword ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="Repeat Password"
                        value={values.repeatPassword}
                    />
                    {
                        validationErrors.repeatPassword ?
                            <p className={styles['validation-message']}>
                                {registerMessages.repeatPassword}
                            </p>
                            : null
                    }
                </div>


                <div>
                    <label
                        htmlFor="phone">
                        Phone:
                    </label>
                    <input
                        className={validationErrors.phone ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="+359886003010"
                        value={values.phone}
                    />
                    {
                        validationErrors.phone ?
                            <p className={styles['validation-message']}>
                                {registerMessages.phone}
                            </p>
                            : null
                    }
                </div>


                <button
                    className={styles.button}
                    disabled={ disabled }
                    type="submit">
                    {!validationErrors ? 'Loading...' : 'Sign up'}
                </button>

                <p className={styles.field}>
                    <span>
                        Sign in
                        <Link to={'/login'} className={styles['reg-btn']} >
                            here
                        </Link>
                    </span>
                </p>
            </form>
        </section>
    )
};

export default Register;