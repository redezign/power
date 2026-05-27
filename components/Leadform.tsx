"use client";

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
