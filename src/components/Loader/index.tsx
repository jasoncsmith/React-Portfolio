import classNames from 'classnames'
import { LuLoader2 } from 'react-icons/lu'

import './index.scss'

export default function Loader({ className = '' }: { className: string }) {
  return <LuLoader2 className={classNames({ loader: true, [className]: !!className })} />
}
