import styles from './index.module.scss'
import Slider from '../../components/Slider'

function Work() {
  return (
    <div id="view-work" className={styles['view-work']}>
      <header>
        <h2>Work</h2>
        <h5 className="pt-1 text-slate-400">Featuring my Custom-Built Responsive React Carousel</h5>
      </header>

      <Slider />
    </div>
  )
}
export default Work
