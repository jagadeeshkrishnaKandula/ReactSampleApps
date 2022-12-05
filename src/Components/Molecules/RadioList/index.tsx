import React from 'react'
import Typography from '@mui/material/Typography';
import RadioButton from '../../Atoms/RadioButton';
import RadioListProps from './Radiolistprops';
const Radiolist = ({heading,r1,r2}:RadioListProps) => {
  return (
    <div>
        <Typography variant='h3'>
            {heading}
        </Typography>
        <RadioButton name={r1}/>
        <RadioButton name={r2}/>

    </div>
  )
}

export default Radiolist