import s from './homePage.module.css';

export const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Добро пожаловать в сканер QR</h1>
    </div>
  );
};
