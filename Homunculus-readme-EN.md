# 🚀 Homunculus.com | Next-Generation Cryptocurrency Trading Analytics Platform

<p align="center">
  <img src="https://via.placeholder.com/200x200.png?text=Homunculus" alt="Homunculus Logo" width="200" height="200">
</p>

<div align="center">
  <strong>Data-Driven Trading, Market Insights</strong>
</div>

## 📊 Project Overview

Homunculus.com is an elegantly designed cryptocurrency trading analytics platform. Built with modern web technologies, it focuses on user experience and data visualization as core design principles.

The platform helps traders consolidate data from multiple exchanges, integrating trading records, data visualization, and performance analysis into a single platform. Through comprehensive trading analysis tools, users gain deeper insights from data and charts, helping them optimize trading strategies and improve profitability.

Whether you're a beginner seeking breakthrough insights or an experienced trader looking to optimize your strategy, Homunculus.com provides multi-dimensional key information to help you find your unique edge in the market.

The platform's security design is noteworthy, using only read-only API access to exchange data or exchange-exported CSV documents, ensuring user fund safety while providing comprehensive analysis capabilities. We do not sell user data or profit in any way from it.

> 💡 **Core Value**: Integration, Analysis, Optimization — Build every trade on a foundation of data.

## 🛠️ Technical Architecture

### Frontend Stack

#### Core Framework
- **React 18** - JavaScript library for building user interfaces
- **Next.js 14** - React framework providing SSR/SSG capabilities
- **TypeScript** - Type-safe JavaScript superset

#### UI Components
- **Material UI** - React implementation of Material Design
- **Ant Design** - Enterprise-level UI design language and React components
- **TailwindCSS** - Utility-first CSS framework providing atomic styling classes

#### Data Visualization
- **Lightweight-charts** - High-performance financial charting library
- **Recharts** - Simple React charting library
- **Victory** - Interactive data visualization components

#### State Management & Data Fetching
- **Zustand** - Simple and efficient state management
- **SWR** - React Hooks library for data fetching and caching
- **WebSocket** - Real-time data updates

### Backend Stack

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

## ✨ Features Implementation

### 1. Multi-Exchange Integration

- 📁 Import trading files exported from brokers
- 🔄 Support for major cryptocurrency exchanges including Binance, OKX, Bybit, Bitget
- 🔑 Connect to user accounts via read-only API keys
- ⏱️ Automatically synchronize trading history and asset data

### 2. Dashboard Features

- 📊 Multi-dimensional charts presenting trades, prices, volumes, and more
- 💰 Total asset overview showing balance, deposits, withdrawals
- 📈 Real-time monitoring of open futures positions
- 📜 Futures trading history records
- ⏰ 24-hour time period analysis for intraday trading
- 📆 Daily/Weekly/Monthly PnL (Profit and Loss) analysis
- 🪙 Coin-based individual instrument analysis
- 🔀 Separate analysis for all trades/long/short positions

### 3. Trading Analysis Tools

- 🎯 **Win-rate Analysis**: Overall win-rate, long trade win-rate, short trade win-rate
- ⏲️ **Trading Duration Analysis**: Average trading time, average duration for long and short positions
- 📊 **Trade Distribution**: Long/short ratio, trade size distribution
- 📉 **Maximum Drawdown Analysis**: Records of maximum losses and consecutive losses
- 📅 **Calendar View**: View trading performance by date

### 4. Trading Journal Features

- 📝 Automatic recording of trading history
- 🏷️ Support for custom tags to categorize and organize trades
- 📒 Rich text notes with image support for recording trading experiences and insights
- 📊 Report generation and download by date or trade tag, including corresponding trade notes
- 📈 Automatic generation of multi-timeframe price charts with buy/sell points marked

### 5. Financial Reporting

- 💸 Funding rate income/expense analysis
- 💱 Trading fee analysis: Maker rebates and Taker fees
- 📋 Limit and market order analysis

---

## 🌟 Highlighted Features

### Data-Driven Trading
Discover trading patterns and regularities through detailed analysis of historical trading data

### Trading Habit Optimization
Help users find their most suitable trading strategies through multi-dimensional analysis of win rates, timing, and scale

### Cumulative P/L Chart
Clearly display cumulative profit and loss trends for intuitive understanding of profitability

### Day/Time Related Performance Metrics
Statistics by day/time period to precisely identify advantageous time slots and optimize trading timing

### Instrument Price and Volume Metrics
Price-volume relationship analysis, deeply exploring revenue sources and improving trading precision

### Trader Groups/Trading Teams
Support team collaboration and private discussions, share group data to promote collective progress

### Profit Trifecta Calculator
Integrate Ross Cameron's performance evaluation system for comprehensive assessment of trading performance

### Detailed Reports & Statistics
Display daily trading volume, number of trades, and fee details, support summary by tag and category for easier review

### Rich Trading Journal Functions
Use rich text, support categories, tags, images and screenshots, seamless copy-paste recording, comprehensive trading idea documentation

### Automated Recording
Reduce manual recording workload, allowing users to focus on analysis rather than data organization

### Transparency & Visualization
Transform complex trading data into intuitive charts and data points for easier understanding and decision-making

---

## 🚀 Potential Improvements

### Development Efficiency
**Architecture Simplification** - Single database architecture reduces maintenance costs, improves development efficiency and system performance

### Market Support
**Extended Market Support** - Currently only supporting cryptocurrency markets, future consideration for expansion to other financial markets such as stocks, futures, forex

### Analysis Capabilities
**Advanced Analysis Features** - Add more advanced analysis tools like machine learning predictions and risk assessments for deeper market insights

### Social Features
**Community Functions** - Add community and social features allowing users to share trading strategies and insights, building a trader community

### Mobile Experience
**Mobile Application Optimization** - Further optimize mobile application experience, enhance mobile functionality, support trading analysis anytime, anywhere

### Chart Tools
**Candlestick Chart Optimization** - Adopt TradingView's real-time candlestick charts: lightweight-charts, providing more professional chart analysis experiences

### Payment Systems
**Payment Processing** - Integrate Stripe payment system for easier membership upgrades and online payments

### Analytics Tools
**User Behavior Analysis** - Integrate various analytics tools including Google Analytics, Tag Manager, Segment, and PostHog to understand user habits

### Authentication Systems
**Social/Identity Authentication** - Support Google OAuth2 login functionality, simplifying login processes and improving user experience

### Membership Systems
**Tiered Membership System** - Provide free and premium versions to meet different user needs and budgets, increasing platform revenue

### User Experience
**Scroll Animation Effects** - Use Framer Motion to implement webpage scroll animation effects, enhancing user experience and visual appeal

### Icon Support
**Icon Libraries** - Integrate Material Icons and Ant Design Icons to provide rich icon support, enhancing interface aesthetics and recognizability

---

<div align="center">
  <p>© 2025 Homunculus.com - Empowering Data-Driven Traders</p>
</div> 