import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constans';
import s from './history.module.css';
import { fgColor } from '../../interface';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  console.log(data);
  return (
    <div>
      <div>
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
