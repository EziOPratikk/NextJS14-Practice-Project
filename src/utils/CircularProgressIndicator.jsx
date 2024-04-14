import classes from './CircularProgressIndicator.module.css';

export default function CircularProgressIndicator() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
}
