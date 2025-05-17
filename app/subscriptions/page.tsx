export default function Subscriptions() {
  return (
    <div className="max-w-3xl mx-auto section">
      <h1 className="section-title">Subscription Plans</h1>
      <p className="section-desc">Choose the plan that fits your needs. All plans include AI-powered invoice transparency for costly repairs.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Tier */}
        <div className="card p-6 flex flex-col gap-2">
          <h2 className="h2 text-gray-800 dark:text-gray-100">Basic</h2>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">$25/mo</div>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm mb-2">
            <li>Tire rotation (4/year)</li>
            <li>Wheel alignment (2/year)</li>
            <li>Small fixes (up to $100/year)</li>
            <li>AI invoice for costly fixes</li>
            <li>Priority booking</li>
            <li>10% off extras</li>
          </ul>
        </div>
        {/* Standard Tier */}
        <div className="card p-6 flex flex-col gap-2">
          <h2 className="h2 text-gray-800 dark:text-gray-100">Standard</h2>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">$60/mo</div>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm mb-2">
            <li>All Basic features</li>
            <li>Oil changes (4/year)</li>
            <li>Diagnostics (2/year)</li>
            <li>Fluid top-offs</li>
            <li>AI invoice + 15% discount</li>
            <li>Next-hour booking</li>
            <li>Customer portal access</li>
          </ul>
        </div>
        {/* Luxury Tier */}
        <div className="card p-6 flex flex-col gap-2">
          <h2 className="h2 text-gray-800 dark:text-gray-100">Luxury</h2>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">$150/mo</div>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 text-sm mb-2">
            <li>All Standard features</li>
            <li>At-home fixes (4/year)</li>
            <li>Premium oil changes</li>
            <li>Unlimited diagnostics</li>
            <li>Detailing (1/year)</li>
            <li>AI invoice + 20% discount</li>
            <li>Free towing (2/year)</li>
            <li>VIP booking, 24/7 support</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 