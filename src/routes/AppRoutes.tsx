import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
