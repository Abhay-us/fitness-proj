import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" sx={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
