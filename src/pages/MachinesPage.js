import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
// @mui
import {Container, Stack, Typography } from '@mui/material';
// components
import { MachineList, MachineFilterSidebar } from '../sections/@dashboard/machines';
// mock
import machines from '../_mock/machines';

// ----------------------------------------------------------------------

export default function MachinesPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: machine | Production UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Machines
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <MachineFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            {/* <ProductSort /> */}
          </Stack>
        </Stack>

        <MachineList machines={machines} />
              
      </Container>
    </>
  );
}
