import Fade from '../../components/Layout/Fade'

// import capitalize from 'lodash/capitalize'
// import useLocalStorage from '../../hooks/useLocalStorage'
// import { User } from '../../components/ContactFormController'

import styles from './index.module.scss'
import Icon from '../Icon'
import SpaceShip from '../Starfield/components/SpaceShip'

function AboutMe() {
  // const [user] = useLocalStorage<User>('user')

  return (
    <article className={styles.about}>
      {/* <Fade>
        {user && (
          <p>
            Welcome Back,{' '}
            <strong>
              {user.fullName
                ?.split(' ')
                .map((name: string) => capitalize(name))
                .join(' ')}
            </strong>
            .
          </p>
        )}

        <p>
          <span className={`${styles['about__icon-hand']} --waving`}>👋</span> My name is{' '}
          <span>Jason Smith</span>, I am a <span>Frontend</span> leaning <span>FullStack Engineer</span>{' '}
          living in <span>Denver, CO</span>. I have been building web-applications for about 13 years.
        </p>
      </Fade> */}
      <Fade>
        <p>
          Like the <strong>spaceships?</strong>{' '}
          <span className="italic whitespace-nowrap">Wait for it...</span>
        </p>
      </Fade>
      <Fade>
        <p>
          This site serves as both my portfolio and a continuous improvement project. I keep it updated with
          new skills and technologies as time permits.{' '}
        </p>
      </Fade>{' '}
      <Fade animationToggle={true}>
        <p>
          I have built apps in start-up environments for airlines, manufacturing, insurance, education and
          automotive sectors. I enjoy the process of crafting technical solutions to implement a product
          vision.
        </p>
      </Fade>
      <Fade>
        <p>
          The frontend is written in <code>Typescript</code>, using <code>React</code> (Framework),{' '}
          <code>React Query</code> (Caching), <code>React Router</code> (SPA), and <code>MobX</code> (State).
        </p>
      </Fade>
      <Fade>
        <p>
          On the backend, I use <code>NodeJs</code> (Runtime), <code>Express</code> (Application),{' '}
          <code>Firebase</code>
          <span className={`${styles['about__icon-fire']} --flickering`}>🔥</span> (Serverless functions), and{' '}
          <code>Firestore</code>
          (NOSQL Database).
        </p>
      </Fade>
      <Fade>
        <p>
          The layout uses a mobile-first approach with a <code>responsive</code> design. Source code is
          available on:{' '}
          <a href="https://github.com/jasoncsmith/React-Portfolio/" target="_blank" rel="noreferrer">
            <Icon className={styles.gitHub} iconName="FaGithub" />
            GitHub
          </a>
          . I had fun building the spaceships
          <span className="inline-block mx-4">
            <SpaceShip type="predator" />
          </span>
          meteors, and stars.
        </p>
      </Fade>
    </article>
  )
}

export default AboutMe
