import React from 'react'
import { IconBaseProps } from 'react-icons'
// TODO: monitor file size and optimize if necessary
// npm install @react-icons/all-files --save -> import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { IoMdClose } from 'react-icons/io'
import {
  IoExitOutline,
  IoChevronBack,
  IoChevronForward,
  IoCogOutline,
  IoMailOutline,
  IoDocumentOutline,
  IoShareSocialOutline,
  IoLayersOutline,
} from 'react-icons/io5'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'

const IconSet = {
  IoShareSocialOutline,
  IoLayersOutline,
  IoDocumentOutline,
  IoMailOutline,
  IoCogOutline,
  IoMdClose,
  IoExitOutline,
  IoChevronBack,
  IoChevronForward,
  FaGithub,
  FaLinkedin,
  BsDownload,
}

export interface IconProps extends IconBaseProps {
  iconName: keyof typeof IconSet
  className?: string
}

const Icon: React.FC<IconProps> = ({ iconName, className = '', ...props }: IconProps) => {
  const IconName = IconSet[iconName]
  return IconName ? <IconName className={className} {...props} /> : null
}

export default Icon
