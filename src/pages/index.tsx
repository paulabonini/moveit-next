import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserContext, UserContextProvider } from '../contexts/UserContext';

import styles from '../styles/pages/Home.module.css';
import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  isLogged: boolean;
}

export default function Home(props: HomeProps) {
  const { isLogged, setIsLogged } = useContext(UserContext);

  useEffect(function () {
    setIsLogged(Boolean(Cookies.get('isLogged')));
  }, [Cookies.get('isLogged')]);

  return (
    <UserContextProvider>

      {isLogged && (
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <div className={styles.container}>
            <Head>
              <title>Início | move.it</title>
            </Head>

            <ExperienceBar />

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
        </ChallengesProvider>
      )}


    </UserContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, isLogged } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isLogged: isLogged ? Boolean(isLogged) : false
    }
  }
}