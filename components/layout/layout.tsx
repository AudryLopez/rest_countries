import Header from "components/header/header";
import { FC } from "react";
import styles from '../../styles/Home.module.css';

interface prop {
  children: object
}
export const Layout: FC<prop> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
