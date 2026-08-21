import { HTMLAttributes } from 'react'
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
  type?: 'button' | 'submit'
  isLoading?: boolean
  disabled?: boolean
}

interface ComponentProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  iconName?: IconProps['iconName']
  className?: string
  isLoading?: boolean
  disabled?: boolean
  inline?: boolean
  visible?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button = ({
  children = '',
  className = '',
  buttonType = 'button',
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  visible = true,
  inline = false,
  iconName,
  ...props
}: ComponentProps & (ButtonProps | LinkProps)) => {
  const Component = buttonType === 'link' ? 'a' : 'button'
  return (
    <Component
      className={classNames({
        [styles.button]: true,
        [styles['button--is-loading']]: isLoading,
        [styles[`button--${variant}`]]: variant,
        [styles[`button--inline`]]: inline,
        [styles[`button--is-hidden`]]: !visible,
        [styles['button--sm']]: size === 'small',
        [styles['button--md']]: size === 'medium',
        [styles['button--lg']]: size === 'large',
        [className]: !!className,
      })}
      {...props}
    >
      {isLoading && <Loader className={styles.button__loader} />}
      {!!iconName && <Icon iconName={iconName} />}
      {children && <span className={styles.button__text}>{children}</span>}
    </Component>
  )
}

export default Button
