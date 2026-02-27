import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  // Global Acuity Scheduling postMessage listener for GTM/Google Ads conversion tracking
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const acuityData = JSON.parse(event.data);

        if (acuityData.event === "AcuityBookingComplete") {

          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: "acuity_booking_success",
            booking_id: acuityData.ID,
            booking_type: acuityData.AppointmentType,
            booking_value: acuityData.Price,
            booking_email: acuityData.Email,
          });

          // Redirect to thank-you page
          navigate("/taname");
        }
      } catch {
        // Ignore non-JSON messages from other sources
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
