# 🚀 Homunculus | Next-Generation Cryptocurrency Trading Analytics Platform

<p align="center">
  <img src="https://via.placeholder.com/200x200.png?text=Homunculus" alt="Homunculus Logo" width="200" height="200">
</p>

<div align="center">
  <strong>Data-Driven Trading, Market Insights</strong>
</div>

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [User Guide](#-user-guide)
- [Technical Architecture](#-technical-architecture)
  - [Frontend](#frontend-architecture)
  - [Backend](#backend-architecture)
- [Development Guide](#-development-guide)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [FAQ](#-faq)
- [License](#-license)

## 🌟 Introduction

Homunculus is an elegantly designed cryptocurrency trading analytics platform. Built with modern web technologies, it focuses on user experience and data visualization as core design principles.

The platform helps traders consolidate data from multiple exchanges, integrating trading records, data visualization, and performance analysis into a single platform. Through comprehensive trading analysis tools, users gain deeper insights from data and charts, helping them optimize trading strategies and improve profitability.

Whether you're a beginner seeking breakthrough insights or an experienced trader looking to optimize your strategy, Homunculus provides multi-dimensional key information to help you find your unique edge in the market.

> 💡 **Core Value**: Integration, Analysis, Optimization — Build every trade on a foundation of data.

## ✨ Key Features

### Multi-Exchange Integration
- Import trading files exported from brokers
- Support for major cryptocurrency exchanges including Binance, OKX, Bybit, Bitget
- Connect to user accounts via read-only API keys
- Automatically synchronize trading history and asset data

### Dashboard Features
- Multi-dimensional charts presenting trades, prices, volumes, and more
- Total asset overview showing balance, deposits, withdrawals
- Real-time monitoring of open futures positions
- Futures trading history records
- 24-hour time period analysis for intraday trading
- Daily/Weekly/Monthly PnL (Profit and Loss) analysis
- Coin-based individual instrument analysis
- Separate analysis for all trades/long/short positions

### Trading Analysis Tools
- **Win-rate Analysis**: Overall win-rate, long trade win-rate, short trade win-rate
- **Trading Duration Analysis**: Average trading time, average duration for long and short positions
- **Trade Distribution**: Long/short ratio, trade size distribution
- **Maximum Drawdown Analysis**: Records of maximum losses and consecutive losses
- **Calendar View**: View trading performance by date

### Trading Journal Features
- Automatic recording of trading history
- Support for custom tags to categorize and organize trades
- Rich text notes with image support for recording trading experiences and insights
- Report generation and download by date or trade tag, including corresponding trade notes
- Automatic generation of multi-timeframe price charts with buy/sell points marked

### Financial Reporting
- Funding rate income/expense analysis
- Trading fee analysis: Maker rebates and Taker fees
- Limit and market order analysis

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL (for backend development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/homunculus.git
cd homunculus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📖 User Guide

### Account Setup
1. Register a new account or log in with existing credentials
2. Navigate to the Profile section to update your personal information
3. Set up your preferences (theme, language, timezone)

### Connecting Exchanges
1. Go to the Portfolio section
2. Click on "Add Exchange"
3. Select your exchange and follow the instructions to add API keys
4. Alternatively, import CSV files exported from your exchange

### Using the Dashboard
1. The main dashboard provides an overview of your trading performance
2. Use the filters to customize the time period and trading pairs
3. Hover over charts for detailed information
4. Click on specific trades to view detailed analysis

### Creating Trading Journal Entries
1. Navigate to the Journal section
2. Click on "New Entry"
3. Add details about your trade, including screenshots and notes
4. Tag your entries for easier organization and analysis

## 🛠️ Technical Architecture

Homunculus uses a modern tech stack designed for performance, scalability, and developer experience.

### Frontend Architecture

#### Core Framework
- **React 19** - JavaScript library for building user interfaces
- **Next.js 15.2.2** - React framework providing SSR/SSG capabilities
- **TypeScript** - Type-safe JavaScript superset

#### UI Components
- **Material UI** - React implementation of Material Design
- **Ant Design** - Enterprise-level UI design language and React components
- **TailwindCSS** - Utility-first CSS framework providing atomic styling classes

#### Data Visualization
- **Lightweight-charts** - High-performance financial charting library
- **Recharts** - Simple React charting library

#### State Management & Data Fetching
- **Zustand** - Simple and efficient state management
- **SWR** - React Hooks library for data fetching and caching
- **WebSocket** - Real-time data updates

### Backend Architecture

#### Core Framework
- **Node.js** - JavaScript runtime environment
- **Express.js** - Lightweight flexible Node.js web application framework
- **TypeScript** - Enhances code maintainability and type safety

#### Database
- **PostgreSQL** - Comprehensive relational database
  - JSONB support: Stores unstructured trading data and user notes
  - TimescaleDB extension: Efficiently processes time-series data like price history
- **Prisma ORM** - Modern ORM tool simplifying database operations

#### Authentication & Security
- **JWT** - Stateless authentication
- **NextAuth.js** - Authentication solution
- **bcrypt** - Password encryption
- **Helmet** - HTTP header security protection

#### Deployment
- **Docker** - Containerized applications
- **Vercel** - Frontend deployment platform
- **Railway/Render** - Backend service deployment

## 💻 Development Guide

### Project Structure

```
homunculus/
├── src/                  # Source code
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable React components
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

### Frontend Development

#### Component Development

We follow a component-based architecture. Each component should:
- Be focused on a single responsibility
- Be reusable where possible
- Include proper TypeScript typing
- Have clear props documentation

Example component:

```tsx
import React from 'react';
import { Card, Typography } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon 
}) => {
  return (
    <Card sx={{ p: 2, height: '100%' }}>
      {icon && <div className="card-icon">{icon}</div>}
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
      {change !== undefined && (
        <Typography 
          color={change >= 0 ? 'success.main' : 'error.main'}
        >
          {change >= 0 ? '+' : ''}{change}%
        </Typography>
      )}
    </Card>
  );
};
```

#### State Management

For global state, we use Zustand. Example store:

```tsx
import { create } from 'zustand';

interface ThemeStore {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  mode: 'dark',
  toggleMode: () => set((state) => ({ 
    mode: state.mode === 'light' ? 'dark' : 'light' 
  })),
}));
```

### Backend Development

#### API Endpoint Development

Follow RESTful principles when creating new endpoints:

```typescript
import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

// Get all trades for a user
export const getUserTrades = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const trades = await prisma.trade.findMany({
      where: { userId },
      orderBy: { openTime: 'desc' },
    });
    
    return res.status(200).json(trades);
  } catch (error) {
    console.error('Error fetching trades:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch trades' 
    });
  }
};
```

#### Database Schema Development

When extending the database schema, use Prisma migrations:

```bash
# Create a migration
npx prisma migrate dev --name add_trade_tags

# Apply migrations
npx prisma migrate deploy
```

## 📡 API Documentation

### Authentication

```
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/auth/me - Get current user
```

### Exchanges

```
GET /api/exchanges - List connected exchanges
POST /api/exchanges - Add new exchange connection
DELETE /api/exchanges/:id - Remove exchange connection
POST /api/exchanges/import - Import CSV data
```

### Trades

```
GET /api/trades - List trades
GET /api/trades/:id - Get trade details
POST /api/trades/:id/notes - Add note to trade
GET /api/trades/statistics - Get trade statistics
```

### Analytics

```
GET /api/analytics/performance - Get performance metrics
GET /api/analytics/distribution - Get trade distribution
GET /api/analytics/calendar - Get calendar view data
```

## 🚢 Deployment

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Add environment variables
4. Deploy

### Backend Deployment (Railway)

1. Connect your GitHub repository to Railway
2. Configure PostgreSQL database
3. Add environment variables
4. Deploy

## 🔮 Roadmap

### Short-term (3-6 months)
- Mobile application optimization
- Advanced chart analysis tools
- Community features for strategy sharing

### Mid-term (6-12 months)
- AI-powered trading insights
- Extended market support (stocks, forex)
- Advanced risk management tools

### Long-term (12+ months)
- Blockchain data integration
- Automated trading strategy backtesting
- Social trading features

## ❓ FAQ

### Is my trading data secure?
Yes, we use read-only API keys and never store your exchange credentials in plain text. All data is encrypted at rest and in transit.

### Which exchanges are supported?
Currently, we support Binance, OKX, Bybit, and Bitget. More exchanges will be added in future updates.

### Can I use Homunculus without connecting to exchanges?
Yes, you can manually import CSV files exported from your exchanges.

### Is there a mobile app?
Currently, we offer a responsive web application optimized for mobile devices. A dedicated mobile app is on our roadmap.

## 📝 License

© 2025 Homunculus - Empowering Data-Driven Traders

---

## 🧩 Removed Dependencies

### Victory (`victory: ^37.3.6`)
Victory was a data visualization library for React that would have been used for creating interactive charts and graphs in the platform. It provides components for common charts like bar charts, line charts, scatter plots, and pie charts. In our project, this functionality is now handled by Recharts and Lightweight-charts, which offer better performance for financial data visualization.

### Toolpad Core (`@toolpad/core: ^0.13.0`)
Toolpad Core is part of MUI's low-code internal tool building framework. It would have been used for creating admin dashboards or internal tools without writing much code. In our project, we've opted for a fully custom-built approach using Material UI components directly, giving us more flexibility and control over the user interface. 