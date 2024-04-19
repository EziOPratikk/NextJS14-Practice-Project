import { handleUserRegister } from '@/lib/action';
import RegisterForm from '@/components/auth/RegisterForm';
import classes from './page.module.css';

export default function Register() {
  return (
    <div className={classes.registerContainer}>
      <h1>Register</h1>
      <RegisterForm onUserRegister={handleUserRegister} />
    </div>
  );
}