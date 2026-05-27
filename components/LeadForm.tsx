"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // SAFE MVP: no backend, no Supabase
    console.log("Lead captured:", formData);

    alert("Thank you! We will contact you soon.");

    setFormData({
      fullName: "",
      mobileNumber: "",
    });
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
