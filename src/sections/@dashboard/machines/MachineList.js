import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import MachineCard from './MachineCard';

// ----------------------------------------------------------------------

MachineList.propTypes = {
  machines: PropTypes.array.isRequired,
};

export default function MachineList({ machines, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {machines.map((machine) => (
        <Grid key={machine.id} item xs={12} sm={6} md={3}>
          <MachineCard machine={machine} />
        </Grid>
      ))}
    </Grid>
  );
}
