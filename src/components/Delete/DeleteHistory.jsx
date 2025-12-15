import s from './deleteHistory.module.css';
import { GENERATE_DATA, SCAN_DATA } from '../../constans';
import { useState } from 'react';

export const DeleteHistory = ({ message }) => {
  const [flag, setFlag] = useState(false);

  const deleteHistoryHandler = () => {
    localStorage.removeItem(
      message === 'GenerateHistory' ? GENERATE_DATA : SCAN_DATA
    );
  };

  return (
    <div>
      <button className={s.button} onClick={deleteHistoryHandler}>
        Удалить историю
      </button>
    </div>
  );
};
