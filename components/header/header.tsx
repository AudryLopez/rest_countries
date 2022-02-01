import styles from './header.module.css'

export default function Header(){
    return (
      <header className={styles.navbar}>
        <div className={styles.left}>
          <h1 className={styles.title}>Where in the word</h1>
        </div>
        <div className={styles.right}>
          <img src="img/moon-solid.svg" className={styles.btnchange} alt="color theme button"/>
        </div>
      </header>
    );
} 