import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constans';

export const QrCodeScanner = () => {
  const [resultScan, setResultScan] = useState(null);

  const scanHandler = (result) => {
    setResultScan(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Наведите камеру на QR-код</p>
      <Scanner
        allowMultiple={false}
        onScan={scanHandler}
        constraints={{
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 300, height: 300 },
        }}
      />
      <p className={s.result}>
        <a href={resultScan} target="_blank">
          {resultScan}
        </a>
      </p>
    </div>
  );
};
