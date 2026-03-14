# NiceLand - AI-Powered Shoe Store

A modern e-commerce platform for shoes with AI-powered recommendations and chat assistance.

## 🚀 Features

- **Product Catalog**: Browse and search shoes with advanced filtering
- **AI Chat Assistant**: Get personalized shoe recommendations via OpenAI
- **Shopping Cart**: Add items and manage your cart
- **Secure Checkout**: Stripe integration for payments
- **User Authentication**: Secure login/signup with Supabase
- **Admin Panel**: Manage products and orders
- **Responsive Design**: Mobile-first UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **AI**: OpenAI API
- **Search**: Algolia
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- OpenAI API key

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/CODESTAR/nike-ai-store.git
cd nike-ai-store
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Add your API keys to `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Algolia
NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_algolia_search_key
ALGOLIA_ADMIN_KEY=your_algolia_admin_key
```

4. **Set up Supabase database**
- Import the SQL schema from `docs/supabase-schema.sql`
- Configure authentication providers

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── lib/                # Utility functions and configurations
├── hooks/              # Custom React hooks
├── store/              # Zustand stores
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## 🗄️ Database Schema

The application uses three main tables:
- **users**: Customer profiles with preferences
- **products**: Shoe inventory with sizes and images
- **orders**: Customer orders with status tracking

See `docs/supabase-schema.sql` for the complete schema.

## 🧪 Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Connect your GitHub repository to Vercel
2. Add environment variables
3. Deploy!

## 📄 License

This project is licensed under the MIT License.
