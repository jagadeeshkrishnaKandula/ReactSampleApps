import React from 'react'
import SingleListItem from '../../Atoms/ListItem'
import Typography from '@mui/material/Typography';
import ListProps from './Listprops';
const ListParent = ({heading,l1,l2,l3,l4}:ListProps) => {
  return (
    <div>
        <Typography variant='h4'>{heading}</Typography>
        <SingleListItem name={l1}/>
        <SingleListItem name={l2}/>
        <SingleListItem name={l3}/>
        <SingleListItem name={l4}/>
    </div>
  )
}
export default ListParent