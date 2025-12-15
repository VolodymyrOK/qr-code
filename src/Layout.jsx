import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { ScanHistory } from './components/History/ScanHistory';
import { GenerateHistory } from './components/History/GenerateHistory';
import { HomePage } from './components/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';
import s from './layout.module.css';
import bgImage from './images/funart.jpg';

export const Layout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className={s.container}>
        <Navigation />
        <div className={s.grow}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qr-code" element={<HomePage />} />
            <Route path="/generate" element={<QrCodeGenerator />} />
            <Route path="/scan" element={<QrCodeScanner />} />
            <Route path="/scanHistory" element={<ScanHistory />} />
            <Route path="/generateHistory" element={<GenerateHistory />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};
