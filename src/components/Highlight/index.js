import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard';

export default function Highlight({ report }) {
  const data = report?.length ? report[report.length - 1] : {};
  const summary = [{
    title: 'total cases',
    count: data.Confirmed,
    type: 'confirmed'
  },
  {
    title: 'Recovered cases',
    count: data.Recovered,
    type: 'recovered'
  },
  {
    title: 'Deaths',
    count: data.Deaths,
    type: 'deaths'
  },];

  return (
    <Grid container spacing={3}>
      {summary.map((item, index) => (
        <Grid key={index} item sm={4} xs={12}>
          <HighlightCard summary={item} />
        </Grid>
      ))}
    </Grid>
  )
}
