import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import { getCountries, getReportByCountry } from './apis';
import { sortBy } from 'lodash';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi'
import '@fontsource/roboto'

moment.locale('vi')

function App() {
  const COUNTRY_VIETNAM = 'vn';
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(({ data }) => {
      const sortedData = sortBy(data, 'Country');
      setCountries(sortedData);
      setSelectedCountry(COUNTRY_VIETNAM);
    });
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
    getReportByCountry(selectedCountry).then((res) => {
      res.data.pop();
      setReport(res.data);
    });
  }, [selectedCountry]);

  const handleOnChange = async ({ target: { value } }) => {
    setSelectedCountry(value);
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">
        Map of cases
      </Typography>
      <Typography>
        {moment().format('LLL')}
      </Typography>
      <CountrySelector
        countries={countries}
        value={selectedCountry}
        handleOnChange={handleOnChange} />
      <Highlight report={report} />
      <Summary report={report} selectedCountry={selectedCountry} />
    </Container>
  );
}

export default App;
