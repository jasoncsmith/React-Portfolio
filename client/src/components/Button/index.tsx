import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import Loader from '../Loader'
import Icon, { IconProps } from '../Icon'
import styles from './index.module.scss'

type LinkProps = {
  buttonType: 'link'
  href: string
  target?: '_blank'
  isLoading?: never
  disabled?: never
}

type ButtonProps = {
  buttonType: 'button'
  type: 'button' | 'submit'
  isLoading?: boolean
  disabled?: boolean
}

interface ComponentProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: string
  iconName?: IconProps['iconName']
  className?: string
  isLoading?: boolean
  disabled?: boolean
}

const Button = ({
  children = '',
  className = '',
  buttonType = 'button',
  isLoading = false,
  iconName,
  ...props
}: ComponentProps & (ButtonProps | LinkProps)) => {
  const Component = buttonType === 'link' ? 'a' : 'button'
  return (
    <Component
      className={classNames({
        [styles.button]: true,
        [styles['button--is-loading']]: isLoading,
        [className]: !!className,
      })}
      {...props}
    >
      {isLoading && <Loader className={styles.button__loader} />}
      {!!iconName && <Icon iconName={iconName} />}
      <span className={styles.button__text}>{children}</span>
    </Component>
  )
}

export default Button
