import { FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
  }
}))

export default function CountrySelector({ value, handleOnChange, countries }) {
  const styles = useStyles();

  return (
    <FormControl className={styles.formControl}>
      <InputLabel htmlFor="country-selector" shrink>Country</InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector'
        }}>
          {
            countries.map((item, index) => (
              <option key={item.ISO2} value={item.ISO2.toLowerCase()}>{item.Country}</option>
            ))
          }
      </NativeSelect>
      <FormHelperText>Choose the country</FormHelperText>
    </FormControl>
  )
}
