import Fade from '../../components/Fade'
import capitalize from 'lodash/capitalize'
import useLocalStorage from '../../hooks/useLocalStorage'
import { User } from '../../components/ContactForm'
import './index.scss'

function About() {
  const [user] = useLocalStorage<User>('user')

  return (
    <div id="view-about" className="view">
      <header>
        <h1>
          <strong className="caption">Portfolio</strong>
          <span className="of"> of </span>
          <br />
          <strong className="name">Jason Smith</strong>
        </h1>
      </header>
      <article>
        <Fade>
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
            <span className="icon--waving">👋</span> My name is <span>Jason Smith</span>, I am a{' '}
            <span>Frontend Engineer</span> living in <span>Denver, CO</span>. I am a builder and a creative.
            Whether I am building with hammer and nail or with a keystroke, my objective is to create products
            that last. During my 13 years of software experience building web applications, I have acquired a
            track record of turning complex business needs into innovative, user-centric software.
          </p>
        </Fade>
        <Fade>
          <p>
            I have built software in start-up environments for airlines, manufacturing, insurance, and
            automotive sectors. Each project had its unique product vision and technical challenges. I have
            enjoyed the process of research, collaboration, and networking to take the complex and make it
            look simple. I chose this career because the landscape is always changing, there is always
            something new to learn or a process to improve -- this keeps my over-active mind happy.
          </p>
        </Fade>

        <Fade>
          <p>
            Periodically, I rebuild this site with my latest skills and technologies. Now featuring functional{' '}
            <code>React</code> components, <code>MobX</code> for state management along with{' '}
            <code>NodeJs</code> and <code>Firebase</code> <span className="icon--flickering">🔥</span> on the
            backend. The graphics are original and 10 years old. The layout uses a mobile first approach and
            is <code>responsive</code> across all devices.
          </p>
        </Fade>
        <Fade>
          <p>
            I Would like to call out my <a href="#/work">custom-built fully responsive carousel</a>, written
            with <code>React</code>, <code>React Query</code>, <code>React Router</code>, <code>MobX</code>{' '}
            and the <code>useResizeObserver</code> hook. Other technologies used on this site include:{' '}
            <code>Typescript</code>, <code>Modular SASS</code>, <code>react-pdf</code>,{' '}
            <code>react-icons</code>, and played with a bit of <code>Tailwind CSS</code>.
          </p>
        </Fade>
        <Fade animationToggle={true}>
          <p>
            Please have a look around and I encourage you to take a look under the hood; link to the source
            code here ➜{' '}
            <strong>
              <a href="https://github.com/jasoncsmith/React-Portfolio/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </strong>
            .
          </p>
        </Fade>
      </article>
    </div>
  )
}

export default About
