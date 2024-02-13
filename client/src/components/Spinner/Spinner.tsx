import { FC } from "react";
import { SpinnerCircular } from 'spinners-react';
import styles from './Spinner.module.css'

const Spinner : FC = (): JSX.Element => {
    return (
        <>
            <SpinnerCircular className={styles.spinner} style={{color: '#f3d22d'}} />
        </>
    )
};

export default Spinner;

