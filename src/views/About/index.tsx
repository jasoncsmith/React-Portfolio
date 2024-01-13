import './index.scss'

function About() {
  return (
    <div id="view-about" className="view">
      <header>
        <h1>
          <strong className="caption">Portfolio</strong>
          <span className="of">of</span>
          <br />
          <strong className="name">Jason Smith</strong>
        </h1>
      </header>
      <article>
        <p>
          This is my 10 year old portfolio site rebuilt with <span>React 18</span>. My web design days are over but, I
          enjoyed building the graphics back in the day.
        </p>
        <p>
          My name is <span>Jason Smith</span>, I live in <span>Denver, CO</span>. I am a <span>Frontend</span> Engineer
          expanding into <span>Fullstack</span> development. I have been building web applications for 13 years and for
          the last 9.5 years, have been working on an e-billing and analytics SaaS product. I love building Web
          Applications working with React.
        </p>
        <p>
          I enjoy building things from scratch, as much as I as enjoy the React open-source community. The site uses{' '}
          <span>MobX, HashRouter, responsive design</span>, a custom-built{' '}
          <span>responsive React carousel, formik validation, custom hooks, react-icons, Webpack, SCSS</span>, and a bit
          of <span>TailwindCSS</span>.
        </p>

        <p>
          Take a look around and of course view the source code on <strong>GitHub</strong>:{' '}
          <a href="https://github.com/jasoncsmith/React-Portfolio/">Portfolio source code</a>.
        </p>
      </article>
    </div>
  )
}

export default About
