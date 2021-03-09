import styles from '../styles/components/LoginBox.module.css';

export function LoginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <div>
        <img src="/icons/Logo.png" alt="Logo Move it" />
      </div>
      <div>
        <header>
          Bem-vindo
        </header>
        <main>
          <img src="/icons/Git.png" alt="Logo Github" />
        </main>
        <footer>
          <input type="text" />
          <button
            type="button"
            className={styles.loginButton}
          >
            ->
          </button>
        </footer>
      </div>
    </div>
  );
}