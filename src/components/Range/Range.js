import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {useSelector} from "react-redux"


function valuetext(value) {
  return `${value}میلیون`;
}

export default function RangeSlider() {
  const rangePrice = useSelector((state) => state.questions.currentInstrument.priceRange)
  const [value, setValue] = React.useState(rangePrice);
  const data = useSelector((state) => state.questions.datas)

  console.log(rangePrice)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay={value}
        getAriaValueText={valuetext}
        min={rangePrice[0]}
        max={rangePrice[1]}
        // flip={false}
      />
    </Box>
  );
}