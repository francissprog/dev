import { RefProps } from '@/types/type'
import React, { FC } from 'react'

const Footer: FC<RefProps> = ({section}) => {
  return (
    <footer ref={section}>Footer</footer>
  )
}

export default Footer