import s from './homePage.module.css';
console.log(s.title);

export const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Добро пожаловать в сканер QR</h1>
    </div>
  );
};
