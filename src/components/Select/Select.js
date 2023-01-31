import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useSelector} from "react-redux"


export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const counter = useSelector((state) => state.questions.index)
    const data = useSelector((state) => state.questions.datas)


    const options = data[counter].options


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((item) => {
            return(
              <MenuItem>{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}