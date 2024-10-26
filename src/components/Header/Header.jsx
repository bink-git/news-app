import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

const { header, title, date } = styles;
const Header = () => {
  return (
    <header className={header}>
      <h1 className={title}>NEWS REACT</h1>
      <p className={date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
