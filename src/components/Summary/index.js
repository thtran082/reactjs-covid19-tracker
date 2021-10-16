import { Grid } from '@material-ui/core'
import React from 'react'
import LineChart from '../../charts/LineChart'

export default function Summary({ report }) {
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={[]} />
      </Grid>
      <Grid item sm={4} xs={12}>
        High map
      </Grid>
    </Grid>
  )
}
