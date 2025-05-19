import Image from "next/image";
import { FaCogs, FaMoneyBillWave, FaRegSmile } from "react-icons/fa";

const PLAN_IMAGES = [
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Subscriptions() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden section bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700">
        <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundImage: `url(${PLAN_IMAGES[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Subscription Plans</h1>
          <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow">Choose the plan that fits your needs. All plans include AI-powered invoice transparency for costly repairs.</p>
        </div>
      </div>
      {/* Plans Section */}
      <section className="max-w-6xl mx-auto section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Tier */}
          <div className="flex flex-col items-center card p-8 card-spacing">
            <Image src={PLAN_IMAGES[0]} alt="Basic Plan" width={320} height={320} quality={90} style={{ objectFit: 'cover' }} className="img-responsive rounded-full mb-4 w-40 h-40" priority />
            <FaCogs className="text-blue-600 text-3xl mb-2" />
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Basic</h2>
            <div className="text-xl font-semibold mb-4">$25/mo</div>
            <ul className="text-gray-700 dark:text-gray-200 text-sm flex flex-col gap-1 mb-6">
              <li>• Tire rotation (4/year)</li>
              <li>• Wheel alignment (2/year)</li>
              <li>• Small fixes (up to $100/year)</li>
              <li>• AI invoice for costly fixes</li>
              <li>• Priority booking</li>
              <li>• 10% off extras</li>
            </ul>
            <button className="btn-primary text-base">Select Plan</button>
          </div>
          {/* Standard Tier */}
          <div className="flex flex-col items-center card p-8 card-spacing">
            <Image src={PLAN_IMAGES[1]} alt="Standard Plan" width={320} height={320} quality={90} style={{ objectFit: 'cover' }} className="img-responsive rounded-full mb-4 w-40 h-40" />
            <FaMoneyBillWave className="text-blue-600 text-3xl mb-2" />
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Standard</h2>
            <div className="text-xl font-semibold mb-4">$60/mo</div>
            <ul className="text-gray-700 dark:text-gray-200 text-sm flex flex-col gap-1 mb-6">
              <li>• All Basic features</li>
              <li>• Oil changes (4/year)</li>
              <li>• Diagnostics (2/year)</li>
              <li>• Fluid top-offs</li>
              <li>• AI invoice + 15% discount</li>
              <li>• Next-hour booking</li>
              <li>• Customer portal access</li>
            </ul>
            <button className="btn-primary text-base">Select Plan</button>
          </div>
          {/* Luxury Tier */}
          <div className="flex flex-col items-center card p-8 card-spacing">
            <Image src={PLAN_IMAGES[2]} alt="Luxury Plan" width={320} height={320} quality={90} style={{ objectFit: 'cover' }} className="img-responsive rounded-full mb-4 w-40 h-40" />
            <FaRegSmile className="text-blue-600 text-3xl mb-2" />
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">Luxury</h2>
            <div className="text-xl font-semibold mb-4">$150/mo</div>
            <ul className="text-gray-700 dark:text-gray-200 text-sm flex flex-col gap-1 mb-6">
              <li>• All Standard features</li>
              <li>• At-home fixes (4/year)</li>
              <li>• Premium oil changes</li>
              <li>• Unlimited diagnostics</li>
              <li>• Detailing (1/year)</li>
              <li>• AI invoice + 20% discount</li>
              <li>• Free towing (2/year)</li>
              <li>• VIP booking, 24/7 support</li>
            </ul>
            <button className="btn-primary text-base">Select Plan</button>
          </div>
        </div>
      </section>
    </div>
  );
} 