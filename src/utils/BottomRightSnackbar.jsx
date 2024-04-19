import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function BottomRightSnackbar(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={props.onOpenSnackbar}
    >
      <Alert
        severity={props.state?.success ? 'success' : 'error'}
        variant='standard'
        sx={{ width: '100%' }}
      >
        {props.state?.message}
      </Alert>
    </Snackbar>
  );
}
