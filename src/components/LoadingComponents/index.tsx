import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RotadedIcon } from './styled'

interface IProps {
  size: number
}

export default function LoadingComponent(props: IProps) {
  return (
    <RotadedIcon size={props.size}>
      <AiOutlineLoading3Quarters className="spiner"/>
    </RotadedIcon>
  )
}
