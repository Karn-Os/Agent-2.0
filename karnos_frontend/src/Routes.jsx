import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage-digital-agency-platform';
import ClientPortalProjectCollaborationHub from './pages/client-portal-project-collaboration-hub';
import ServicesEcosystemOverview from './pages/services-ecosystem-overview';
import ContactConsultationCenter from './pages/contact-consultation-center';
import PortfolioUniverse from './pages/portfolio-universe-multi-dimensional-showcase';
import InnovationLabPage from './pages/innovation-lab-technology-leadership-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ClientPortalProjectCollaborationHub />} />
        <Route path="/homepage-digital-agency-platform" element={<Homepage />} />
        <Route path="/client-portal-project-collaboration-hub" element={<ClientPortalProjectCollaborationHub />} />
        <Route path="/services-ecosystem-overview" element={<ServicesEcosystemOverview />} />
        <Route path="/contact-consultation-center" element={<ContactConsultationCenter />} />
        <Route path="/portfolio-universe-multi-dimensional-showcase" element={<PortfolioUniverse />} />
        <Route path="/innovation-lab-technology-leadership-hub" element={<InnovationLabPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
