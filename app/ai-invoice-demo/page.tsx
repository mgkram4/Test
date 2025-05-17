"use client";
import { useState } from "react";

export default function AIInvoiceDemo() {
  const [form, setForm] = useState({ repair: "", vehicle: "", estimate: "" });
  const [invoice, setInvoice] = useState<null | { range: string; parts: string; labor: string }>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock AI logic: price range is estimate ±15%, split 60% parts, 40% labor
    const est = parseFloat(form.estimate);
    if (isNaN(est) || est <= 0) return;
    const low = Math.round(est * 0.85);
    const high = Math.round(est * 1.15);
    const partsLow = Math.round(low * 0.6);
    const partsHigh = Math.round(high * 0.6);
    const laborLow = Math.round(low * 0.4);
    const laborHigh = Math.round(high * 0.4);
    setInvoice({
      range: `$${low} - $${high}`,
      parts: `$${partsLow} - $${partsHigh}`,
      labor: `$${laborLow} - $${laborHigh}`,
    });
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">AI Invoice Demo</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-200">Try our AI-powered invoice feature! Enter a repair, vehicle, and estimated cost to see a sample price range and breakdown.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          name="repair"
          placeholder="Repair type (e.g., Transmission Fix)"
          className="border rounded px-3 py-2 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700"
          value={form.repair}
          onChange={handleChange}
          required
        />
        <input
          name="vehicle"
          placeholder="Vehicle (e.g., 2018 Toyota Camry)"
          className="border rounded px-3 py-2 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700"
          value={form.vehicle}
          onChange={handleChange}
          required
        />
        <input
          name="estimate"
          placeholder="Estimated cost (e.g., 1200)"
          type="number"
          min="1"
          className="border rounded px-3 py-2 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700"
          value={form.estimate}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-700 dark:bg-blue-500 text-white font-semibold rounded px-4 py-2 hover:bg-blue-800 dark:hover:bg-blue-600 transition">Generate AI Invoice</button>
      </form>
      {invoice && (
        <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 p-6 mt-4">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">AI Invoice Estimate</h2>
          <div className="mb-1 text-gray-800 dark:text-gray-100"><strong>Repair:</strong> {form.repair}</div>
          <div className="mb-1 text-gray-800 dark:text-gray-100"><strong>Vehicle:</strong> {form.vehicle}</div>
          <div className="mb-1 text-blue-700 dark:text-blue-300"><strong>Estimated Price Range:</strong> {invoice.range}</div>
          <div className="mb-1 text-gray-700 dark:text-gray-200"><strong>Parts:</strong> {invoice.parts}</div>
          <div className="mb-1 text-gray-700 dark:text-gray-200"><strong>Labor:</strong> {invoice.labor}</div>
          <div className="mt-2 text-xs text-gray-500">* This is a sample AI-generated estimate for demonstration purposes only.</div>
        </div>
      )}
    </div>
  );
} 