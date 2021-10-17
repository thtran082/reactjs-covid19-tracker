import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

const generateOptions = (data) => {
  const categories = data.map(item => moment(item.Date).format('YYYY/MM/DD'));
  return {
    chart: { height: 500, },
    title: { text: 'Cumulative cases' },
    xAxis: { categories, crosshair: true, },
    colors: ['red'],
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
      name: 'Cases',
      data: data.map(i => i.Confirmed),
    }
  }
}

const LineChart = ({ data }) => {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('all')

  useEffect(() => {
    let filteredData = [];
    switch (reportType) {
      case '30':
        filteredData = data.slice(data.length - 30);
        break;
      case '7':
        filteredData = data.slice(data.length - 7);
        break;
      default:
        filteredData = data;
        break;
    }
    setOptions(generateOptions(filteredData))
  }, [data, reportType]);

  useEffect(() => {
  }, [reportType]);

  return (
    <div>
      <ButtonGroup size="small" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          color={reportType === 'all' ? 'secondary' : ''}
          onClick={() => setReportType('all')}>
          Show all
        </Button>
        <Button
          color={reportType === '30' ? 'secondary' : ''}
          onClick={() => setReportType('30')}>
          Show latest 30 days
        </Button>
        <Button
          color={reportType === '7' ? 'secondary' : ''}
          onClick={() => setReportType('7')}>
          Show latest 7 days
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highchart}
        options={options}
      />
    </div>
  )
}

export default React.memo(LineChart);