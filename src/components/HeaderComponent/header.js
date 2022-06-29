import React from 'react'
import {
    TextField,
    Button,
    Stack
} from '@mui/material';

export default function Header({ allList, allComplete }) {
    const reset = () => {
        localStorage.clear()
        allList([])
        allComplete([])
    }

  return (
    <Stack direction="row" justifyContent="end" style={{marginRight: "10px"}}>
        <Button variant="contained" onClick={reset}>Reset</Button>
    </Stack>
  )
}
