import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OfferPage from './pages/OfferPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
}
