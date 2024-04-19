import { auth } from '@/lib/auth';
import { handleGitHubLogout } from '@/lib/action';
import NavigationRoutes from './NavigationRoutes';
import classes from './MainNavigation.module.css';

export default async function MainNavigation() {
  const session = await auth();

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>&alefsym;</div>
      <div>
        <NavigationRoutes onLogout={handleGitHubLogout} session={session} />
      </div>
    </nav>
  );
}