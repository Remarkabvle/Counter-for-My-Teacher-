import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0 0.5rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
  },
});

function App() {
  const [count, setCount] = useState(0);
  const [incrementStep, setIncrementStep] = useState(1);
  const [decrementStep, setDecrementStep] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + incrementStep);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(prevCount - decrementStep, 0));
  };

  const handleReset = () => {
    setCount(0);
    setIncrementStep(1);
    setDecrementStep(1);
  };

  const handleIncrementStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setIncrementStep(value >= 0 ? value : 1);
  };

  const handleDecrementStepChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setDecrementStep(value >= 0 ? value : 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="App" textAlign="center" mt={5}>
        <Typography variant="h1">Counter</Typography>
        <Box className="counter" display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Button variant="contained" color="primary" onClick={handleDecrement}>-</Button>
          <Typography variant="h4" component="span" mx={2}>{count}</Typography>
          <Button variant="contained" color="primary" onClick={handleIncrement}>+</Button>
        </Box>
        <Box className="controls" display="flex" flexDirection="column" alignItems="center">
          <TextField
            label="Increment Step"
            type="number"
            value={incrementStep}
            onChange={handleIncrementStepChange}
            inputProps={{ min: 0 }}
          />
          <TextField
            label="Decrement Step"
            type="number"
            value={decrementStep}
            onChange={handleDecrementStepChange}
            inputProps={{ min: 0 }}
          />
          <Button variant="contained" color="secondary" onClick={handleReset}>Reset</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
