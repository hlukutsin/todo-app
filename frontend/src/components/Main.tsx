import { Box, Grid } from '@mui/joy';

const Main = () => {
  return (
    <Box>
      <Box>Header</Box>
      <Grid
        sx={{
          height: '100vh',
          width: '100%',
          // backgroundColor: 'var(--joy-palette-neutral-200, #DDE7EE)',
        }}
      >
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </Box>
  );
};

export default Main;
