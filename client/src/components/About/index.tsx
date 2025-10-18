import Fade from '../../components/Layout/Fade'
import Icon from '../Icon'
import SpaceShip from '../Starfield/components/SpaceShip'
import styles from './index.module.scss'

function AboutMe() {
  // const [user] = useLocalStorage<User>('user')

  return (
    <div className={styles['about--wrap']}>
      <article className={styles.about}>
        <Fade animationToggle={true}>
          <p>
            <strong>Spaceships?</strong> What??{' '}
            <span className="italic whitespace-nowrap">Wait for it...</span>
          </p>
        </Fade>
        <Fade animationToggle={true}>
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
        <Fade animationToggle={true}>
          <p>
            The frontend is written in <code>Typescript</code>, using <code>React</code> (Framework),{' '}
            <code>React Query</code> (Caching), <code>React Router</code> (SPA), and <code>MobX</code>{' '}
            (State).
          </p>
        </Fade>
        <Fade animationToggle={true}>
          <p>
            On the backend, I use <code>NodeJs</code> (Runtime), <code>Express</code> (Application),{' '}
            <code>Firebase</code>
            <span className={`${styles['about__icon-fire']} --flickering`}>🔥</span> (Serverless functions),
            and <code>Firestore</code>
            (NOSQL Database).
          </p>
        </Fade>
        <Fade animationToggle={true}>
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
    </div>
  )
}

export default AboutMe
