import NavigationRoutes from './NavigationRoutes';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>&alefsym;</div>
      <div>
        <NavigationRoutes />
      </div>
    </nav>
  );
}
