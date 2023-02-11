import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useDispatch, useSelector} from "react-redux"
import { currentInstrument } from "../../store/store"


export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const counter = useSelector((state) => state.questions.index)
    const data = useSelector((state) => state.questions.datas)

    const title = useSelector((state) => state.questions.datas[counter].type)
    const dispatch = useDispatch()


    const options = data[counter].options


  const handleChange = (event) => {
    const instrument = event.target.value
    setAge(instrument)
    dispatch(currentInstrument(instrument));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth margin='normal'>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          // label={age}
          onChange={handleChange}
        >
          {options.map((item) => {
            // setAge(item.type)
            return(
              <MenuItem value={item}>{item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}