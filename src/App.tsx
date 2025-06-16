import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import all pages
import Home from './pages/Home';
import RegisterRole from './pages/RegisterRole';
import RegisterUser from './pages/RegisterUser';
import RegisterVendor from './pages/RegisterVendor';
import Login from './pages/Login';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import WhitelistRegistration from './pages/WhitelistRegistration';
import MintPage from './pages/MintPage';
import MyCertificates from './pages/MyCertificates';
import VerifyCertificate from './pages/VerifyCertificate';
import VendorLogin from './pages/VendorLogin';
import VendorDashboard from './pages/VendorDashboard';
import CreateEvent from './pages/CreateEvent';
import ManageEvent from './pages/ManageEvent';
import ViewWhitelist from './pages/ViewWhitelist';
import ViewMinted from './pages/ViewMinted';
import VendorProfile from './pages/VendorProfile';
import About from './pages/About';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterRole />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/vendor" element={<RegisterVendor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/whitelist/:eventId" element={<WhitelistRegistration />} />
          <Route path="/mint/:eventId" element={<MintPage />} />
          <Route path="/my-certificates" element={<MyCertificates />} />
          <Route path="/verify/:tokenId" element={<VerifyCertificate />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Vendor Routes */}
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/event/create" element={<CreateEvent />} />
          <Route path="/vendor/event/:id" element={<ManageEvent />} />
          <Route path="/vendor/event/:id/whitelist" element={<ViewWhitelist />} />
          <Route path="/vendor/event/:id/minted" element={<ViewMinted />} />
          <Route path="/vendor/profile" element={<VendorProfile />} />

          {/* Error Routes */}
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;