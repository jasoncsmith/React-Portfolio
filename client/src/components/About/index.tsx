import Fade from '../../components/Layout/Fade'

// import capitalize from 'lodash/capitalize'
// import useLocalStorage from '../../hooks/useLocalStorage'
// import { User } from '../../components/ContactFormController'

import styles from './index.module.scss'
import Icon from '../Icon'

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
          This site serves as both a portfolio and a side project to foster continuous improvement. I keep it
          updated with new skills and technologies as time permits. On the frontend, written in{' '}
          <code>Typescript</code>, I am using <code>React</code> functional components,{' '}
          <code>React Query</code>, <code>React Router</code>, and <code>MobX</code> for state management. On
          the backend, I use <code>NodeJs</code>, <code>Express</code> and <code>Firebase</code> serverless
          functions <span className={`${styles['about__icon-fire']} --flickering`}>🔥</span>. The layout uses
          a mobile first approach and is <code>responsive</code> across all devices. Source code is available
          on{' '}
          <a href="https://github.com/jasoncsmith/React-Portfolio/" target="_blank" rel="noreferrer">
            <Icon className={styles.gitHub} iconName="FaGithub" />
            GitHub
          </a>
          . Other technologies used on this site include: <code>Modular SASS</code>, <code>react-pdf</code>,{' '}
          <code>react-icons</code>, and a bit of <code>Tailwind CSS</code>
        </p>
      </Fade>

      <Fade animationToggle={true}>
        <p>
          I have built software in start-up environments for airlines, manufacturing, insurance, and
          automotive sectors. Each project had its unique product vision and technical challenges. I have
          enjoyed the process of research, collaboration, and networking to take the complex and turn it into
          great looking user-centric product.
        </p>
      </Fade>

      <Fade animationToggle={true}>
        <p>
          Would like to call out my <a href="/work">custom-built device responsive carousel</a>, written with{' '}
          <code>React</code>, <code>MobX</code> and the <code>useResizeObserver</code> hook.
        </p>
      </Fade>
    </article>
  )
}

export default AboutMe
