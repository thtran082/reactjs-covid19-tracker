import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getMapDataByCountryId } from '../../apis';
import HighMaps from '../../charts/HighMaps';
import LineChart from '../../charts/LineChart'

export default function Summary({ report, selectedCountry }) {
  const [mapData, setMapData] = useState({})

  useEffect(() => {
    if (!selectedCountry) return;
    getMapDataByCountryId(selectedCountry).then((res) => {
      setMapData(res);
    }).catch((error)=> {
      setMapData({})
    });
  }, [selectedCountry]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineChart data={report} />
      </Grid>
      <Grid item sm={4} xs={12}>
        <HighMaps mapData={mapData} />
      </Grid>
    </Grid>
  )
}
