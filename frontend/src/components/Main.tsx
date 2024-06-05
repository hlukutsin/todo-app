import { Box, Grid } from '@mui/joy';

import TodosList from './TodosList.tsx';

const Main = () => {
  return (
    <Box sx={{ backgroundColor: '#d0d0d0', height: '100%' }}>
      <Box
        sx={{
          width: '100%',
          height: '40px',
          backgroundColor: 'primary.400',
        }}
      ></Box>
      <Grid
        container
        sx={{
          height: 'calc(100% - 40px)',
        }}
      >
        <Grid xs={4}>
          <TodosList />
        </Grid>
        <Grid
          xs={8}
          sx={{
            height: '100%',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#f0f0f0',
              height: '100%',
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
