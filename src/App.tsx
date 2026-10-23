import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { MotorcyclesPage } from './pages/MotorcyclesPage';
import { ScootersPage } from './pages/ScootersPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { DealerLocatorPage } from './pages/DealerLocatorPage';
import { AboutPage } from './pages/AboutPage';
import { OffersPage } from './pages/OffersPage';
import { ServicePage } from './pages/ServicePage';
import { BookServicePage } from './pages/BookServicePage';
import { BookTestRidePage } from './pages/BookTestRidePage';
import { PartsAccessoriesPage } from './pages/PartsAccessoriesPage';
import { FinancePage } from './pages/FinancePage';
import { ExchangePage } from './pages/ExchangePage';
import { DigitalShowroomPage } from './pages/DigitalShowroomPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only scroll if there's no hash target
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#ee2326] selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Primary Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/motorcycles" element={<MotorcyclesPage />} />
            <Route path="/motorcycles/:slug" element={<VehicleDetailPage />} />
            <Route path="/scooters" element={<ScootersPage />} />
            <Route path="/scooters/:slug" element={<VehicleDetailPage />} />
            
            {/* Dealership & Network */}
            <Route path="/dealer-locator" element={<DealerLocatorPage />} />
            <Route path="/dealerships" element={<Navigate to="/dealer-locator" replace />} />
            <Route path="/models" element={<Navigate to="/motorcycles" replace />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/offers" element={<OffersPage />} />

            {/* Service & Ownership */}
            <Route path="/service" element={<ServicePage />} />
            <Route path="/book-service" element={<BookServicePage />} />
            <Route path="/book-test-ride" element={<BookTestRidePage />} />
            <Route path="/book-test-drive" element={<BookTestRidePage />} />

            <Route path="/parts-and-accessories" element={<PartsAccessoriesPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/financing" element={<Navigate to="/finance" replace />} />
            <Route path="/exchange" element={<ExchangePage />} />
            <Route path="/digital-showroom" element={<DigitalShowroomPage />} />

            {/* Media & People */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blogs" element={<Navigate to="/blog" replace />} />

            {/* Contact & Legal */}
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
