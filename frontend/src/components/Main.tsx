import { Box, Grid } from '@mui/joy';

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
        <Grid xs={3}>
          <Box sx={{ backgroundColor: '#f0f0f0', height: '100%' }}>
            Column 1
          </Box>
        </Grid>
        <Grid
          xs={9}
          sx={{
            height: '100%',
          }}
        >
          <Box sx={{ backgroundColor: '#d0d0d0', height: '100%' }}>
            Column 2
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
