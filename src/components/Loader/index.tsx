import classNames from 'classnames'

import './index.scss'

export default function Loader({ className }: { className?: string }) {
  return (
    <div
      className={classNames({
        loader: true,
        className: !!className,
      })}
    ></div>
  )
}
