import s from './footer.module.css';

export const Footer = () => {
  return (
    <div className={s.footer}>
      &copy;&nbsp; Scanner QR, {new Date().getFullYear()}
    </div>
  );
};
