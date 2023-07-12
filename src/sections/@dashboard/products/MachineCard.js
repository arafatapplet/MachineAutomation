import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
// components
import Label from '../../../components/label';


// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

MachineCard.propTypes = {
  machine: PropTypes.object,
};

export default function MachineCard({ machine }) {
  const { machineNo, start, stop, frecuency, rpm, counter, status, brdColor } = machine;

  function CircularProgressWithLabel(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => {
            const newProgress = prevProgress + 10;
            return newProgress <= props.value ? newProgress : prevProgress;
        });
        }, 100);
        return () => {
        clearInterval(timer);
        };
    }, [props.value]);
    return (
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <CircularProgress variant="determinate" value={progress} style={{ width: '140px', height: '140px', color: brdColor }} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="subtitle1" component="div" color="#212B36" sx={{ fontSize: '26px' }}>
            {/* {`${Math.round(props.value)}%`} */}
            {machineNo}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

  return (
    <Card sx={{ border: `4px solid ${brdColor}` }}>
      <Box sx={{ pt: '10%', position: 'relative' }}>
        
          <Label
            // variant="filled"
            // color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
       
        {/* <StyledMachineBar alt={machineID} /> */}
        
      </Box>
      
      <Stack spacing={2} sx={{ p: 3 }}>
        <CircularProgressWithLabel value={frecuency} />
        
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>
            Start: {start}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>
            Stop: {stop}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>
            Frecuency: {frecuency}%
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>
            RPM: {rpm}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1" noWrap>
            Counter: {counter}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
