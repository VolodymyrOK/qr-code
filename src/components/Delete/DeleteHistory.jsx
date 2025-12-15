import s from './deleteHistory.module.css';
import { GENERATE_DATA, SCAN_DATA } from '../../constans';

export const DeleteHistory = ({ message }) => {
  const deleteHistoryHandler = () => {
    const deleteData =
      message === 'GenerateHistory' ? GENERATE_DATA : SCAN_DATA;
    let textPromt = null;
    message === 'GenerateHistory'
      ? (textPromt = 'создания кодов')
      : (textPromt = 'сканирований');
    const alert = window.confirm(`Удалить историю ${textPromt}?`);
    if (alert) {
      localStorage.removeItem(deleteData);
    }
  };

  return (
    <div>
      <button className={s.button} onClick={deleteHistoryHandler}>
        Удалить историю
      </button>
    </div>
  );
};
