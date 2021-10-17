import React from 'react'
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import CountUp from 'react-countup';

const useStyles = makeStyles({
  wrapper: (props) => ({
    borderLeftWidth: '5px',
    borderLeftStyle: 'solid',
    borderLeftColor: props.type === 'confirmed' ? '#c9302c' : props.type === 'recovered' ? '#28a745' : 'gray'
  }),
  title: {
    fontSize: '18px',
  },
  count: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
})

export default function HighlightCard({ summary }) {
  const styles = useStyles(summary);
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography className={styles.title} component="p" variant="body2">{summary.title}</Typography>
        <Typography className={styles.count} component="span" variant="body2">
          <CountUp end={summary.count} separator='.' duration={2} />
        </Typography>
      </CardContent>
    </Card>
  )
}
