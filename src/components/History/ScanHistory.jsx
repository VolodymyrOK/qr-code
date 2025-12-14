import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constans';
import s from './dddhistory.module.css';
import { fgColor } from '../../interface';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  console.log(data);
  return (
    <div>
      {data.map((text, i = 0) => (
        <p key={++i} className={s.history}>
          <QRCodeSVG value={text} size={100} fgColor={fgColor} />
          {text}
        </p>
      ))}
    </div>
  );
};
