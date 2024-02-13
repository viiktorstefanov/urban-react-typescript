import { FC } from 'react';
import styles from './ProfileMenu.module.css';
import { FiEdit, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProfileMenuGuest : FC = () : JSX.Element => {
    return (
        <>
            <div className={styles['dropdownItem-info']}>
                <span className={styles['dropdownItem-name']}>Guest</span>
            </div>
            <ul>
                <li className={styles['dropdownItem']}>
                    <FiLogIn className={styles['dropdownItem-ico']} />
                    <Link to='/login' className={styles['dropdownItem-link']}>Sign in</Link>
                </li>
                <li className={styles['dropdownItem']}>
                    <FiEdit className={styles['dropdownItem-ico']} />
                    <Link to='/register' className={styles['dropdownItem-link']}>Sign up</Link>
                </li>
            </ul>
        </>
    );
};

export default ProfileMenuGuest;