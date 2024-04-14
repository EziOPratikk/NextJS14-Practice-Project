import classes from './Footer.module.css';

export default function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className={classes.footerContainer}>
      © {currentYear} Pratik Khadka Inc. All right reserved
    </footer>
  );
}
