import { FC } from "react";
import styles from './Booking.module.css';
import Calendar from 'react-calendar';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Booking : FC = () : JSX.Element => {

    return (
        <></>
        // <section id="bookingPage" className={styles.bookingPage}>
        //     <Calendar
        //         nextLabel={<FaArrowRight style={{ fontSize: '25px' }} />}
        //         prevLabel={<FaArrowLeft style={{ fontSize: '25px' }} />}
        //         prev2Label={null}
        //         next2Label={null}
        //         minDetail={'month'}
        //         maxDetail={'month'}
        //         onClickDay={onClickDay}
        //         tileDisabled={tileDisabled}
        //         tileClassName={tileClassName}
        //     />
        //     <form className={styles.model} onSubmit={onSubmit} method='POST'>
        //         {model ?
        //             <>
        //                 <p className={styles['hours-message']}>Choose a preferred time:</p>
        //                 <div className={styles['hours-wrapper']}>
        //                     {hours !== '10:00-13:00' ? <div className={styles['hours-first-radio-wrapper']} >
        //                         <input
        //                             className={styles['hours-first-radio']}
        //                             type="radio"
        //                             id="hour"
        //                             name="hour"
        //                             value="10:00 - 13:00"
        //                             onChange={onChange}
        //                         />
        //                         <label htmlFor="hour">
        //                             10:00 - 13:00
        //                         </label>
        //                     </div> : null}
        //                     {hours !== '14:00-17:00' ? <div className={styles['hours-second-radio-wrapper']} >
        //                         <input
        //                             className={styles['hours-second-radio']}
        //                             type="radio"
        //                             id="hour2"
        //                             name="hour"
        //                             value="14:00 - 17:00"
        //                             onChange={onChange}
        //                         />
        //                         <label htmlFor="hour2">
        //                             14:00 - 17:00
        //                         </label>
        //                     </div> : null}
        //                 </div>
        //             </>
        //             : null}
        //         {model ?
        //             <button
        //                 className={styles.button}
        //                 disabled={isSubmit ? true : false}
        //                 type="submit">{isSubmit ? 'Loading...' : 'Confirm'}
        //             </button>
        //             : null}
        //     </form>
        // </section>
    )
};

export default Booking;