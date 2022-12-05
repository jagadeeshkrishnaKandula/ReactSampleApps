import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import RadioProps from './RadioProps'

const RadioButton = ({name}:RadioProps) => {
  return (
    <div>
         <RadioGroup>
    <FormControlLabel value={name}control={<Radio />} label={name} />
  </RadioGroup>
    </div>
  )
}

export default RadioButton