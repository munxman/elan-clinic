import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/context/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Faq from "./pages/Faq";
import Philosophy from "./pages/Philosophy";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import PrivateOffice from "./pages/PrivateOffice";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/philosophy" element={<Philosophy />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/private-office" element={<PrivateOffice />} />
                <Route path="/broneeri" element={<Booking />} />
                <Route path="/taname" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
