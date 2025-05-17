export default function Services() {
  return (
    <div className="max-w-3xl mx-auto section">
      <h1 className="section-title">Our Services</h1>
      <p className="section-desc">We offer a range of automotive services for both subscribers and walk-in customers. For costly repairs, our AI-powered invoice system provides transparent price ranges.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="h2 text-gray-800 dark:text-gray-100 mb-2">Walk-In Services</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm">
            <li>Diagnostics & Inspections</li>
            <li>Brake System Repairs</li>
            <li>Transmission Repairs</li>
            <li>Engine Tune-Ups</li>
            <li>Fluid Top-Offs</li>
            <li>AI invoice for repairs over $200</li>
            <li>Online booking available</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="h2 text-gray-800 dark:text-gray-100 mb-2">Subscription Services</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm">
            <li>Tire Rotation & Wheel Alignment</li>
            <li>Oil Changes (Standard & Premium)</li>
            <li>At-Home Fixes (Luxury tier)</li>
            <li>Detailing (Luxury tier)</li>
            <li>Unlimited Diagnostics (Luxury tier)</li>
            <li>AI invoice with tiered discounts</li>
            <li>Priority & VIP booking</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 