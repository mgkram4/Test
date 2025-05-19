import { FaCar, FaCogs } from "react-icons/fa";

const SERVICES_HEADER_IMG = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden section bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700">
        <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundImage: `url(${SERVICES_HEADER_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow">We offer a range of automotive services for both subscribers and walk-in customers. For costly repairs, our AI-powered invoice system provides transparent price ranges.</p>
        </div>
      </div>
      {/* Services Section */}
      <section className="max-w-3xl mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-8 flex flex-col items-center">
            <FaCar className="text-blue-600 text-3xl mb-2" />
            <h2 className="h2 text-gray-800 dark:text-gray-100 mb-2">Walk-In Services</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm mb-2 text-left w-full">
              <li>Diagnostics & Inspections</li>
              <li>Brake System Repairs</li>
              <li>Transmission Repairs</li>
              <li>Engine Tune-Ups</li>
              <li>Fluid Top-Offs</li>
              <li>AI invoice for repairs over $200</li>
              <li>Online booking available</li>
            </ul>
          </div>
          <div className="card p-8 flex flex-col items-center">
            <FaCogs className="text-blue-600 text-3xl mb-2" />
            <h2 className="h2 text-gray-800 dark:text-gray-100 mb-2">Subscription Services</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm mb-2 text-left w-full">
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
      </section>
    </div>
  );
} 