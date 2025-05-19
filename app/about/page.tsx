
const ABOUT_HEADER_IMG = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden section bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700">
        <div className="absolute inset-0 w-full h-full z-0" style={{ backgroundImage: `url(${ABOUT_HEADER_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">About Precision Auto Solutions</h1>
        </div>
      </div>
      {/* About Card Section */}
      <section className="max-w-2xl mx-auto section">
        <div className="card p-8">
          <p className="section-desc mb-4">
            Precision Auto Solutions is dedicated to transforming the automotive repair experience through technology. Our mission is to provide transparent, efficient, and customer-focused services for both subscribers and walk-in clients.
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            Our integrated information system automates scheduling, billing, and service tracking, while our innovative AI-powered invoicing feature ensures fair and transparent pricing for costly repairs. We believe in building trust and delivering value through data-driven insights and seamless service.
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            Join us as we lead the way in smart, customer-centric automotive care.
          </p>
        </div>
      </section>
    </div>
  );
} 