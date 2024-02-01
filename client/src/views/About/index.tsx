import './index.scss'

function About() {
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
        <p>
          <span className="icon--waving">👋</span> My name is <span>Jason Smith</span>, I am a{' '}
          <span>Frontend Engineer</span> living in <span>Denver, CO</span>. My passion is delivering elegant
          web applications through solid engineering.
        </p>
        <p>
          About this site, it is 10 years old and needed some work under the hood. So I rebuilt it with{' '}
          <code>React 18</code> and <code>MobX</code>. The graphics are original, and I had a great time
          creating them back in the day. The biggest design update is that it is now <code>responsive</code>{' '}
          across all devices <small>(go ahead and resize the width of your browser)</small>.
        </p>
        <p>
          Would like to call out my <a href="#/work">custom-built fully responsive carousel</a>, written with{' '}
          <code>React</code> and <code>MobX</code>. Other technologies used on this site include:{' '}
          <code>
            Typescript, formik validation, useResizeObserver hook, a custom modal hook, react-pdf,
            react-icons, SASS
          </code>
          , and played with a bit of <code>Tailwind CSS</code>.
        </p>
        <p>
          Please take a look around and I encourage you to take a peek under the hood -- link to the source
          code is here:{' '}
          <strong>
            <a href="https://github.com/jasoncsmith/React-Portfolio/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </strong>
          .
        </p>
      </article>
    </div>
  )
}

export default About
