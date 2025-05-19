"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCar, FaCogs, FaMoneyBillWave, FaRegSmile } from "react-icons/fa";

// Unsplash images (free to use)
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80", // existing header image
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
const HERO_IMG = HERO_IMAGES[0];
const AI_INVOICE_IMG = HERO_IMAGES[1];
const AI_INVOICE_IMG2 = HERO_IMAGES[2];
const AI_INVOICE_IMG3 = HERO_IMAGES[3];

const FEATURES = [
  {
    icon: <FaCogs className="text-blue-600 text-3xl" />, // Automation
    title: "Automated Scheduling & Billing",
    desc: "Streamline your shop with seamless, automated workflows for appointments and payments.",
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />, // AI Invoicing
    title: "AI-Powered Invoicing",
    desc: "Transparent, dynamic price ranges for costly repairs—powered by real shop data and AI.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <FaRegSmile className="text-blue-600 text-3xl" />, // Customer Satisfaction
    title: "Customer Trust & Satisfaction",
    desc: "Build loyalty with clear pricing, fast service, and a modern customer experience.",
    img: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <FaCar className="text-blue-600 text-3xl" />, // Subscription
    title: "Flexible Subscription Plans",
    desc: "Offer tiered plans and walk-in options to fit every customer's needs.",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80",
  },
];

const PLANS = [
  {
    name: "Basic",
    price: "$25/mo",
    perks: [
      "Tire rotation (4/year)",
      "Wheel alignment (2/year)",
      "Small fixes (up to $100/year)",
      "AI invoice for costly fixes",
      "Priority booking",
      "10% off extras",
    ],
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Standard",
    price: "$60/mo",
    perks: [
      "All Basic features",
      "Oil changes (4/year)",
      "Diagnostics (2/year)",
      "Fluid top-offs",
      "AI invoice + 15% discount",
      "Next-hour booking",
      "Customer portal access",
    ],
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxury",
    price: "$150/mo",
    perks: [
      "All Standard features",
      "At-home fixes (4/year)",
      "Premium oil changes",
      "Unlimited diagnostics",
      "Detailing (1/year)",
      "AI invoice + 20% discount",
      "Free towing (2/year)",
      "VIP booking, 24/7 support",
    ],
    img: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden section">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-0"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Revolutionize Your Auto Shop</h1>
          <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow">Integrated Information System with AI-Powered Invoicing</p>
          <Link href="#plans">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="section grid grid-cols-1 md:grid-cols-2 gap-10 px-0 md:mx-auto">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
            className="flex flex-col md:flex-row items-center gap-6 card p-6 md:p-12 card-spacing"
          >
            <Image
              src={f.img}
              alt={f.title}
              width={420}
              height={280}
              quality={90}
              style={{ objectFit: 'cover' }}
              className="img-responsive w-full md:w-[420px] h-48 md:h-72 rounded-xl"
              priority={i === 0}
            />
            <div className="flex-1 w-36 text-3xl flex flex-col gap-2">
              <div>{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 dark:bg-blue-950 section">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">From booking to billing, our system makes every step seamless for your shop and your customers.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <FaCar className="text-blue-600 text-3xl" />,
              title: "Book or Walk-In",
              desc: "Customers book online or walk in for service."
            },
            {
              icon: <FaCogs className="text-blue-600 text-3xl" />,
              title: "AI Analyzes & Prices",
              desc: "AI reviews service needs and generates a transparent invoice."
            },
            {
              icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />,
              title: "Approve & Pay",
              desc: "Customer reviews, approves, and pays—all online."
            },
            {
              icon: <FaRegSmile className="text-blue-600 text-3xl" />,
              title: "Service Complete",
              desc: "Customer leaves happy, and your shop gets paid faster."
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex-1 flex flex-col items-center card p-6 card-spacing"
            >
              <div className="mb-3">{step.icon}</div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="plans" className="max-w-6xl mx-auto section">
        <div className="text-center mb-12">
          <h2 className="section-title">Flexible Subscription Plans</h2>
          <p className="section-desc">Choose the plan that fits your customers best. All plans include AI-powered invoice transparency for costly repairs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col items-center card p-8 card-spacing"
            >
              <Image
                src={plan.img}
                alt={plan.name}
                width={320}
                height={320}
                quality={90}
                style={{ objectFit: 'cover' }}
                className="img-responsive rounded-full mb-4 w-40 h-40"
                priority={i === 0}
              />
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">{plan.name}</h3>
              <div className="text-xl font-semibold mb-4">{plan.price}</div>
              <ul className="text-gray-700 dark:text-gray-200 text-sm flex flex-col gap-1 mb-6">
                {plan.perks.map((perk, j) => (
                  <li key={j}>• {perk}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base"
              >
                Select Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Invoice Demo Teaser */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 section">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">See AI Invoicing in Action</h2>
            <p className="mb-4 text-lg">Experience how our AI generates transparent, data-driven price ranges for repairs. Try the demo now!</p>
            <Link href="/ai-invoice-demo">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-base"
              >
                Try AI Invoice Demo
              </motion.button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex gap-2">
              <Image src={AI_INVOICE_IMG} alt="AI Invoice Demo 1" width={100} height={80} className="img-responsive rounded" />
              <Image src={AI_INVOICE_IMG2} alt="AI Invoice Demo 2" width={100} height={80} className="img-responsive rounded" />
              <Image src={AI_INVOICE_IMG3} alt="AI Invoice Demo 3" width={100} height={80} className="img-responsive rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Ready to Transform Your Auto Shop?
          </motion.h2>
          <p className="section-desc">Join the future of automotive service. Start your free trial or contact us for a personalized demo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#plans">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-lg"
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-lg"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
