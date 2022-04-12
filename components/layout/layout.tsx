import Header from "components/header/header";
import { Children, FC } from "react";
import styles from "../styles/Home.module.css";

interface prop {
  children: object
}
export const main: FC<prop> = ({ children }) => {
  
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{Children}</main>
    </div>
  );
}