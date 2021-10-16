import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import React, { useEffect, useState } from 'react'

const generateOptions = (data) => {
  const categories = [];
  return {
    chart: { height: 500, },
    title: { text: 'Cumulative cases' },
    xAsis: { categories, crosshair: true, },
    colors: ['green'],
    yAxis: { min: 0, title: { text: null } },
    tooltip: {
      headerFormat: 'something',
      pointFormat: 'pointer format',
      footerFormat: 'something again',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: {
      name: '',
      data,
    }
  }
}

export default function LineChart({ data }) {
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(generateOptions(data))
  }, [data]);

  return (
    <div>
      <HighchartsReact highcharts={Highchart}
        options={options}
      />
    </div>
  )
}
