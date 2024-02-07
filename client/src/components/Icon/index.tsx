import React from 'react'
import { IconBaseProps } from 'react-icons'
import * as Bs from 'react-icons/bs'
import * as io5 from 'react-icons/io5'
import * as io from 'react-icons/io'
import * as fa from 'react-icons/fa'
// TODO: monitor file size and optimize if necessary
// npm install @react-icons/all-files --save -> import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const IconSet = { ...Bs, ...io5, ...io, ...fa }

export interface IconProps extends IconBaseProps {
  iconName: keyof typeof IconSet
  className?: string
}

const Icon: React.FC<IconProps> = ({ iconName, className = '', ...props }: IconProps) => {
  const IconName = IconSet[iconName]
  return IconName ? <IconName {...props} /> : null
}

export default Icon
