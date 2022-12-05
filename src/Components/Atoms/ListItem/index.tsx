import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import ListProps from './ListItemInterface'
const SingleListItem = ({name}:ListProps) => {
  return (
    <div>
        <ListItem>
        <ListItemIcon>
        <Checkbox edge="start" style={{color:'green'}}
        />
        </ListItemIcon>
        <ListItemText primary={name}/>
        </ListItem>
    </div>
  )
}

export default SingleListItem