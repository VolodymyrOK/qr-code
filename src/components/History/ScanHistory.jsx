import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constans';
import s from './history.module.css';
import { fgColor } from '../../interface';
import { DeleteHistory } from '../Delete/DeleteHistory';

const message = 'ScanHistory';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  console.log(data);
  return (
    <div>
      <DeleteHistory message={message} />
      <div className={s.container}>
        {data.map((text, i = 0) => (
          <p key={++i} className={s.history}>
            <QRCodeSVG value={text} size={100} fgColor={fgColor} />
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
