import Head from 'next/head';
import { LoginBox } from '../components/LoginBox';
// import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Login.module.css';
// import { CountdownProvider } from '../contexts/CountdownContext';
// import { ChallengesProvider } from '../contexts/ChallengesContext';

// interface HomeProps {
//   level: number;
//   currentExperience: number;
//   challengesCompleted: number;
// }

// (props: HomeProps)

export default function Login() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      {/* <LoginProvider> */}
      <section>
        <div>
          <img src="/icons/Simbolo.png" alt="Simbolo" />
        </div>
        <div>
          <LoginBox />
        </div>
      </section>
      {/* </LoginProvider> */}

    </div>


  )
}

// <ChallengesProvider
//   level={props.level}
//   currentExperience={props.currentExperience}
//   challengesCompleted={props.challengesCompleted}
// >

{/* <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider> */}


{/* export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
} */}