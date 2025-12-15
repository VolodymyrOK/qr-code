import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constans';
import s from './history.module.css';
import { fgColor } from '../../interface';
import { DeleteHistory } from '../Delete/DeleteHistory';

const message = 'GenerateHistory';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  const deleteHistoryHandler = () => {
    if (data) {
      localStorage.removeItem(GENERATE_DATA);
    }
  };

  return (
    <div>
      <DeleteHistory message={message} />
      <div className={s.container}>
        {data.map((text, i = 0) => (
          <div key={++i} className={s.history}>
            <span>
              <QRCodeSVG value={text} size={100} fgColor={fgColor} />
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
