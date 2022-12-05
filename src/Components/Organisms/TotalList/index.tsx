import { Grid } from '@mui/material'
import React from 'react'
import ListParent from '../../Molecules/List'
import Radiolist from '../../Molecules/RadioList'

const OuterList = () => {
  return (
    <div>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={4}>
            <ListParent heading="Distance" l1="0-10" l2="11 -20" l3="21-30" l4="31-40"/>

            </Grid>
            <Grid item xs={4}>
            <ListParent  heading='Date Posted' l1='Past 24 hours' l2='Past week' l3='Past month' l4='Anytime'/>

            </Grid>
            <Grid item xs={4}>
            <Radiolist heading='Green Commute '  r1='yes' r2='no'/>
            </Grid>
            <Grid item xs>
            <ListParent heading='Job Type' l1='Full time' l2='Internship' l3='Contract' l4='Remote'/>

            </Grid>
            
            <Grid item xs>
            <ListParent heading='Experience Level' l1='Fresher' l2='Mid-level' l3='Director' l4='Executive'/>

            </Grid>
            <Grid item xs>
            <ListParent heading='Transport' l1='Metro' l2='Bus' l3='Car pooling' l4='Motor Cycle'/>

            </Grid>
        </Grid>
    </div>
  )
}

export default OuterList