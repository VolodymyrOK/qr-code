import { Link } from 'react-router';
import s from './navigation.module.css';

export const Navigation = () => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <Link className={s.button} to="/">
          Главная страница
        </Link>
        <Link className={s.button} to="/generate">
          Генерировать QR код
        </Link>
        <Link className={s.button} to="/scan">
          Сканировать QR код
        </Link>
        <Link className={s.button} to="/generateHistory">
          История генерирования
        </Link>
        <Link className={s.button} to="/scanHistory">
          История сканирования
        </Link>
      </nav>
    </div>
  );
};
