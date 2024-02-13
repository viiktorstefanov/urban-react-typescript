import { FC } from "react";
import styles from "./Default.module.css";

const Default: FC = (): JSX.Element => {
  return (
    <section id="defaultPage" className={styles.defaultPage}>
      <h1>404</h1>
      <h2>Page not found</h2>
    </section>
  );
};

export default Default;
