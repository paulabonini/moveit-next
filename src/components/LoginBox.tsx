
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from '../styles/components/LoginBox.module.css';

export function LoginBox() {

  const { settingUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.simbolo}>
          <img src="/icons/Simbolo.png" alt="Simbolo" />
        </div>
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
              <input type="text" placeholder="Digite seu username" />
              <button
                type="button"
                name="user"
                className={styles.loginButton}
                onClick={settingUser}
              >
                -{'>'}
              </button>
            </footer>
          </div>
        </div>
);
    </section>

    </div>
  )

}