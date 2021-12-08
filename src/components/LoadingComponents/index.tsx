import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RotadedIcon } from './styled'

export default function LoadingComponent(props) {
  return (
    <RotadedIcon size={props.size}>
      <AiOutlineLoading3Quarters className="spiner"/>
    </RotadedIcon>
  )
}
