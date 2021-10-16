import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import { getCountries, getReportByCountry } from './apis';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(({ data }) => {
      setCountries(data);
      setSelectedCountry('vietnam');
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
    <>
      <CountrySelector
        countries={countries}
        value={selectedCountry}
        handleOnChange={handleOnChange} />
      <Highlight report={report} />
      <Summary report={report} />
    </>
  );
}

export default App;
