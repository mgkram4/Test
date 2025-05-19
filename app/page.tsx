"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCar, FaCogs, FaMoneyBillWave, FaRegSmile } from "react-icons/fa";

// Images
const HERO_IMG = "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80";
const FEATURE_IMAGES = [
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80"
];
const AI_INVOICE_IMAGES = [
  FEATURE_IMAGES[0],
  FEATURE_IMAGES[1],
  FEATURE_IMAGES[2],
];

const FEATURES = [
  {
    icon: <FaCogs className="text-blue-600 text-4xl mb-2" />, // Automation
    title: "Automated Scheduling & Billing",
    desc: "Seamless, automated workflows for appointments and payments.",
    img: FEATURE_IMAGES[0],
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-4xl mb-2" />, // AI Invoicing
    title: "AI-Powered Invoicing",
    desc: "Transparent, dynamic price ranges for costly repairs—powered by real shop data and AI.",
    img: FEATURE_IMAGES[1],
  },
  {
    icon: <FaRegSmile className="text-blue-600 text-4xl mb-2" />, // Customer Satisfaction
    title: "Customer Trust & Satisfaction",
    desc: "Build loyalty with clear pricing, fast service, and a modern customer experience.",
    img: FEATURE_IMAGES[2],
  },
  {
    icon: <FaCar className="text-blue-600 text-4xl mb-2" />, // Subscription
    title: "Flexible Subscription Plans",
    desc: "Offer tiered plans and walk-in options to fit every customer's needs.",
    img: FEATURE_IMAGES[3],
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
    img: FEATURE_IMAGES[0],
    highlight: false,
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
    img: FEATURE_IMAGES[1],
    highlight: true,
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
    img: FEATURE_IMAGES[2],
    highlight: false,
  },
];

const HOW_IT_WORKS = [
  {
    icon: <FaCar className="text-blue-600 text-3xl" />,
    title: "Book or Walk-In",
    desc: "Customers book online or walk in for service.",
  },
  {
    icon: <FaCogs className="text-blue-600 text-3xl" />,
    title: "AI Analyzes & Prices",
    desc: "AI reviews service needs and generates a transparent invoice.",
  },
  {
    icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />,
    title: "Approve & Pay",
    desc: "Customer reviews, approves, and pays—all online.",
  },
  {
    icon: <FaRegSmile className="text-blue-600 text-3xl" />,
    title: "Service Complete",
    desc: "Customer leaves happy, and your shop gets paid faster.",
  },
];

export default function Home() {
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Carousel logic for AI Invoice Demo
  const nextImg = () => setCarouselIdx((i) => (i + 1) % AI_INVOICE_IMAGES.length);
  const prevImg = () => setCarouselIdx((i) => (i - 1 + AI_INVOICE_IMAGES.length) % AI_INVOICE_IMAGES.length);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-gray-950">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO_IMG}
          alt="Auto Shop Hero"
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center text-white px-4 max-w-2xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            Transform Your Auto Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl mb-8 font-medium drop-shadow"
          >
            Modern, AI-powered service. Unmatched transparency. Happy customers.
          </motion.p>
          <Link href="#plans">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-xl px-8 py-3 shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 hover:scale-[1.03] transition-transform"
            >
              <Image
                src={f.img}
                alt={f.title}
                width={420}
                height={280}
                quality={90}
                className="rounded-2xl w-full md:w-[420px] h-48 md:h-72 object-cover shadow-lg"
                priority={i === 0}
              />
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <div>{f.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS - HORIZONTAL STEPPER */}
      <section className="py-20 bg-blue-50 dark:bg-blue-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 w-64 min-h-[220px] relative"
            >
              <div className="mb-3">{step.icon}</div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-base">{step.desc}</p>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute right-[-32px] top-1/2 -translate-y-1/2">
                  <div className="w-16 h-1 bg-blue-300 dark:bg-blue-700 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section id="plans" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">Flexible Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className={`flex flex-col items-center rounded-3xl shadow-2xl p-10 border-4 ${plan.highlight ? 'border-blue-600 scale-105 bg-blue-50 dark:bg-blue-900' : 'border-transparent bg-white dark:bg-gray-900'} transition-transform`}
            >
              <Image
                src={plan.img}
                alt={plan.name}
                width={120}
                height={120}
                quality={90}
                className="rounded-full mb-4 w-28 h-28 object-cover shadow-lg border-4 border-white dark:border-gray-800"
                priority={i === 1}
              />
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-blue-700 dark:text-blue-300' : 'text-gray-800 dark:text-gray-100'}`}>{plan.name}</h3>
              <div className="text-xl font-semibold mb-4">{plan.price}</div>
              <ul className="text-gray-700 dark:text-gray-200 text-base flex flex-col gap-1 mb-6">
                {plan.perks.map((perk, j) => (
                  <li key={j}>• {perk}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className={`btn-primary text-base px-6 py-2 ${plan.highlight ? 'bg-blue-600 text-white' : ''}`}
              >
                {plan.highlight ? 'Most Popular' : 'Select Plan'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI INVOICE DEMO TEASER - CAROUSEL */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">See AI Invoicing in Action</h2>
            <p className="mb-6 text-lg">Experience how our AI generates transparent, data-driven price ranges for repairs. Try the demo now!</p>
            <Link href="/ai-invoice-demo">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-base px-6 py-2"
              >
                Try AI Invoice Demo
              </motion.button>
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-[320px] h-[220px]">
              <Image
                src={AI_INVOICE_IMAGES[carouselIdx]}
                alt={`AI Invoice Demo ${carouselIdx + 1}`}
                fill
                className="object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
              />
              <button
                onClick={prevImg}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 shadow hover:bg-white"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={nextImg}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 shadow hover:bg-white"
                aria-label="Next"
              >
                ›
              </button>
            </div>
            <div className="flex gap-2 mt-4">
              {AI_INVOICE_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIdx(idx)}
                  className={`w-3 h-3 rounded-full ${carouselIdx === idx ? 'bg-white' : 'bg-white/50'} border border-blue-200`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Ready to Transform Your Auto Shop?
          </motion.h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Join the future of automotive service. Start your free trial or contact us for a personalized demo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#plans">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-lg px-8 py-3"
              >
                Start Free Trial
              </motion.button>
            </Link>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-lg px-8 py-3"
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
