import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesTicker from '@/components/ServicesTicker';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import VendorPartner from '@/components/VendorPartner';
import Insights from '@/components/Insights';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
"use client";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main>
      <h1>PowerAdda</h1>

      <LeadForm />
    </main>
  );
}

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `🚀 New Lead Inquiry%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Service: ${formData.service}`;

    // CHANGE THIS NUMBER
    const whatsappNumber = "91XXXXXXXXXX";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
      <input
        placeholder="Your Name"
        required
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        placeholder="Mobile Number"
        required
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <input
        placeholder="Service Needed (Battery / Solar / EV etc)"
        required
        onChange={(e) =>
          setFormData({ ...formData, service: e.target.value })
        }
      />

      <button type="submit">
        Get Callback
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ServicesTicker />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <VendorPartner />
      <Insights />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
