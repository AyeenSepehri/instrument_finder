import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={props.onClick} variant="outlined">{props.children}</Button>
    </Stack>
  );
}