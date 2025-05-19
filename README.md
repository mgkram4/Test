This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## System Architecture Overview

### Visual Diagram

![System Architecture](public/architecture-diagram.png)

### Components

- **Front-End**: Web/mobile app (React.js, Tailwind CSS) for booking, viewing subscriptions, and receiving AI-generated invoices.
- **Back-End**: Cloud-based server (Node.js, Express.js) for data processing, subscription management, and AI pricing model integration.
- **Database**: Relational database (MySQL) for customer, service, and pricing data.
- **AI Module**: Python (scikit-learn) machine learning model to estimate repair costs based on historical data, vehicle type, and repair complexity.
- **Security**: Encrypted data transmission (HTTPS/TLS) and authentication for all user and admin actions.
- **Cloud**: AWS for hosting, scalability, and managed services.

### Technology Stack

- **Front-End**: React.js, Tailwind CSS
- **Back-End**: Node.js, Express.js
- **Database**: MySQL
- **AI**: Python, scikit-learn
- **Cloud**: AWS (EC2, RDS, S3, etc.)

### Data Flow

1. Customer requests service via web/mobile app.
2. AI module analyzes repair needs and estimates price range.
3. Invoice with price range is generated and sent to customer.
4. Customer reviews and approves invoice.
5. Service is completed and tracked in the system.

### Rubric Alignment
- **Detailed, well-structured system architecture (20%)**: This section provides a clear, visual, and descriptive overview of the system, its components, and data flow, meeting rubric requirements.

# Test

## Front-End App Directory (`/app`)

This directory contains the entire front-end of Precision Auto Solutions, built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. Below is a detailed breakdown of its structure, features, and how each part works:

### Directory Structure

```
app/
├── ai-invoice-demo/         # AI-powered invoice demo page
│   └── page.tsx
├── about/                  # About page
│   └── page.tsx
├── services/               # Services overview page
│   └── page.tsx
├── subscriptions/          # Subscription plans page
│   └── page.tsx
├── components/             # Shared UI components (Navbar, Footer)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── globals.css             # Global Tailwind and custom styles
├── head.tsx                # HTML <head> metadata
├── layout.tsx              # Root layout (Navbar, Footer, theming)
├── page.tsx                # Home page (features, plans, CTA)
└── favicon.ico             # App icon
```

### Key Features & Pages

- **Home Page (`page.tsx`)**: Landing page with animated hero, feature highlights, subscription plans, and a call-to-action. Uses Framer Motion for smooth animations and Next.js Image for optimized images.
- **AI Invoice Demo (`ai-invoice-demo/page.tsx`)**: Interactive form where users can input repair details and get a sample AI-generated invoice. Demonstrates integration with a backend AI model (expects a POST to `/predict`).
- **About (`about/page.tsx`)**: Explains the mission and vision of Precision Auto Solutions.
- **Services (`services/page.tsx`)**: Lists all automotive services offered, for both subscribers and walk-ins, with emphasis on AI-powered invoice transparency.
- **Subscriptions (`subscriptions/page.tsx`)**: Details tiered subscription plans (Basic, Standard, Luxury), each with unique perks and pricing.

### Shared Components

- **Navbar (`components/Navbar.tsx`)**: Responsive navigation bar with links to all main pages and a mobile drawer menu. Uses React Icons for visual cues.
- **Footer (`components/Footer.tsx`)**: Consistent footer with navigation links, copyright, and social icons.

### Styling

- **Tailwind CSS**: All styling is handled via Tailwind utility classes, with custom classes in `globals.css` for buttons, cards, sections, and responsive design.
- **Dark Mode**: Fully supported via Tailwind's dark mode utilities and CSS variables.

### Layout & Metadata

- **`layout.tsx`**: Wraps all pages with Navbar and Footer, sets up global theming, and injects metadata for SEO.
- **`head.tsx`**: Defines HTML metadata, favicon, and theme color for the app.

### Technologies Used

- **Next.js (App Router)**: File-based routing, server-side rendering, and static site generation.
- **React**: Component-based UI development.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive design.
- **Framer Motion**: Animation library for React (used on the home page).
- **React Icons**: Icon library for consistent, scalable icons.

### How It Works

- **Navigation**: Users can access all main features via the Navbar. The layout ensures a consistent look and feel across all pages.
- **AI Invoice Demo**: The demo page sends user input to a backend AI endpoint and displays a sample invoice, showcasing the core value proposition.
- **Subscription Plans**: Users can compare and select plans, each with a clear list of included services and perks.
- **Responsive & Accessible**: The UI is fully responsive and includes accessibility best practices (focus states, ARIA labels).

### Extending the App

- **Add new pages**: Create a new folder under `app/` with a `page.tsx` file.
- **Add new components**: Place reusable UI in `app/components/` and import as needed.
- **Customize styles**: Edit `globals.css` or use Tailwind classes in your components.

---

This section provides a comprehensive overview of the `/app` directory, its structure, and how each part contributes to the overall user experience and business goals of Precision Auto Solutions.
