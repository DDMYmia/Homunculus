# 🔧 Homunculus Backend Architecture Design

<div align="center">
  <p><strong>Stable · Efficient · Scalable</strong></p>
  <p>Technical Foundation for Next-Generation Cryptocurrency Trading Analytics Platform</p>
</div>

## 📡 Architecture Overview

The Homunculus backend adopts a lightweight modular architecture designed to enhance system maintainability, scalability, and reliability. The system consists of the following main components:

- **Client Layer**: Frontend application based on React and Next.js
- **API Layer**: RESTful API implemented with Node.js + Express.js
- **Core Service Layer**:
  - Authentication & User Service
  - Trading Data Service
  - Analytics Service
  - Notification Service
  - File Storage Service
- **Data Layer**: PostgreSQL single database architecture

This design simplifies architectural complexity while maintaining functional integrity, making it particularly suitable for projects maintained by individual developers.

## 🛠️ Technology Stack Selection

### 1. Main Framework

- **Node.js + Express.js**: Lightweight and efficient web server framework, easy to develop and maintain
- **TypeScript**: Type-safe JavaScript superset that improves code quality and maintainability

### 2. Database

- **PostgreSQL**: Comprehensive relational database supporting both structured and unstructured data
  - JSONB type for storing unstructured data (such as raw trading records, user notes)
  - Traditional table structures for relational data (user information, configurations)
  - TimescaleDB extension for efficient time-series data processing (price history)
- **Prisma ORM**: Modern ORM tool that simplifies database operations with type-safe query interfaces

### 3. Authentication

- **JWT** (JSON Web Token): For stateless authentication, simplifying authentication in distributed systems
- **NextAuth.js**: Comprehensive authentication solution supporting multiple strategies
- **bcrypt**: Password encryption for protecting sensitive user information

### 4. API Design

- **RESTful API**: Primary API design style, simple to use with widespread support
- **WebSocket**: Provides real-time data updates, suitable for price and trading data live streaming
- **Express Middleware**: Custom middleware for request validation, authentication, and error handling

### 5. Security

- **Helmet**: Sets HTTP headers to enhance security and prevent common web vulnerabilities
- **CORS**: Cross-Origin Resource Sharing, securely configuring API access permissions
- **Rate Limiting**: API request rate limiting to prevent abuse and attacks
- **Input Validation**: Express Validator used to validate all user inputs and prevent injection attacks

### 6. Logging & Monitoring

- **Winston**: Flexible logging tool supporting multiple log levels and output formats
- **Morgan**: HTTP request logging middleware for monitoring API access
- **Pino**: High-performance logging tool suitable for production environments

### 7. Deployment

- **Docker**: Container-based application deployment simplifying environment configuration
- **Vercel/Netlify**: Next.js frontend deployment
- **Railway/Render**: Backend service deployment

## 🏗️ Core Module Design

### 1. User Management Service

#### Features:
- User registration, login, password reset - Handles user authentication processes
- User profile management - Stores and updates user personal information
- Membership level and permission management - Controls feature access and advanced capabilities
- Social media account linking - Supports third-party account login and integration

#### API Endpoint Examples:
```
POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/users/profile - Get user profile
PUT /api/users/profile - Update user profile
```

### 2. Exchange Integration Service

#### Features:
- Exchange API key management - Securely store and use API credentials
- Data retrieval from various exchanges - Automatic synchronization of trading and market data
- CSV trading data import - Support for manual import of historical trading records
- Data standardization and cleaning - Unify data formats across different exchanges

#### API Endpoint Examples:
```
POST /api/exchanges/connect - Add exchange API
GET /api/exchanges/list - Get connected exchanges
POST /api/exchanges/import - Import CSV data
GET /api/exchanges/sync-status - Check synchronization status
```

### 3. Trading Data Service

#### Features:
- Store and manage trading records - Maintain complete trading history
- Provide trading history queries - Support various filtering conditions and analysis
- Trade tags and notes management - Allow users to organize and annotate trades
- Trading performance metrics calculation - Automatically generate key performance indicators

#### API Endpoint Examples:
```
GET /api/trades - Get trade list
GET /api/trades/:id - Get single trade details
POST /api/trades/:id/notes - Add trade notes
GET /api/trades/statistics - Get trade statistics
```

### 4. Analytics Service

#### Features:
- Calculate trading performance metrics - Analyze profit/loss rates, drawdowns, average returns, etc.
- Generate various analytical reports - Provide comprehensive trading performance analysis
- Risk assessment and management - Evaluate trading risks and provide recommendations
- Chart and data visualization preparation - Provide formatted data for frontend display

#### API Endpoint Examples:
```
GET /api/analytics/performance - Get performance analysis
GET /api/analytics/risk - Get risk assessment
GET /api/analytics/calendar - Get calendar view data
GET /api/analytics/patterns - Discover trading patterns
```

### 5. Notification Service

#### Features:
- System notifications and reminders - Send platform updates and important information
- Email integration - Use Nodemailer to send notifications
- Price and event alerts - Send market reminders based on user settings
- User activity logs - Record user operation history

#### API Endpoint Examples:
```
GET /api/notifications - Get user notifications
POST /api/alerts/create - Create price alert
PUT /api/notifications/:id/read - Mark notification as read
GET /api/activity-log - Get activity log
```

### 6. File Storage Service

#### Features:
- Manage user-uploaded images - Store trading screenshots and profile avatars
- Store trading screenshots and charts - Support trade record documentation
- Export and report generation - Create downloadable analysis reports
- Cloud storage integration - Use AWS S3 or similar services for file storage

#### API Endpoint Examples:
```
POST /api/files/upload - Upload file
GET /api/files/:id - Get file
POST /api/reports/generate - Generate report
GET /api/reports/download/:id - Download report
```

## 💾 Database Design

### PostgreSQL Tables

#### 1. Users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  subscription JSONB DEFAULT '{"plan": "free", "status": "active"}',
  preferences JSONB DEFAULT '{"theme": "dark", "colorScheme": "default", "language": "en", "timezone": "UTC"}'
);
```

#### 2. Exchange Connections
```sql
CREATE TABLE exchange_connections (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  exchange VARCHAR(50) NOT NULL,
  api_key VARCHAR(255) NOT NULL,
  api_secret TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  last_synced TIMESTAMP,
  permissions JSONB,
  nickname VARCHAR(100)
);
```

#### 3. Trades
```sql
CREATE TABLE trades (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  exchange_id INTEGER REFERENCES exchange_connections(id),
  symbol VARCHAR(50) NOT NULL,
  side VARCHAR(10) NOT NULL,
  type VARCHAR(20) NOT NULL,
  size NUMERIC NOT NULL,
  price NUMERIC NOT NULL,
  fee NUMERIC,
  fee_currency VARCHAR(20),
  open_time TIMESTAMP NOT NULL,
  close_time TIMESTAMP,
  pnl NUMERIC,
  tags TEXT[],  -- Using array type to store tags
  status VARCHAR(20) NOT NULL,
  original_data JSONB  -- Store original exchange data
);
```

#### 4. Trade Notes
```sql
CREATE TABLE trade_notes (
  id SERIAL PRIMARY KEY,
  trade_id INTEGER REFERENCES trades(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  images TEXT[],  -- Store image URL array
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5. Assets
```sql
CREATE TABLE assets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  exchange_id INTEGER REFERENCES exchange_connections(id),
  coin VARCHAR(20) NOT NULL,
  amount NUMERIC NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  type VARCHAR(20) NOT NULL
);
```

#### 6. Price History
```sql
-- Requires TimescaleDB extension
CREATE TABLE price_history (
  time TIMESTAMP NOT NULL,
  symbol VARCHAR(20) NOT NULL,
  open NUMERIC NOT NULL,
  high NUMERIC NOT NULL,
  low NUMERIC NOT NULL,
  close NUMERIC NOT NULL,
  volume NUMERIC NOT NULL,
  PRIMARY KEY (time, symbol)
);

-- Convert to hypertable
SELECT create_hypertable('price_history', 'time');
```

#### 7. Notifications
```sql
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  type VARCHAR(50) NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔐 Security Design

### 1. API Security

- **Authentication requirements**: All API endpoints require JWT authentication, ensuring only authorized users can access
- **Transport encryption**: HTTPS encryption used to prevent data interception
- **Request limiting**: API request rate limiting to prevent abuse and attacks
- **Input validation**: Express Validator validates all user inputs to prevent injection attacks

### 2. Exchange API Key Protection

- **Encrypted storage**: API keys are encrypted using encryption keys configured in environment variables
- **Minimum permissions**: Only requesting minimum required permissions (read-only access) to reduce security risks
- **Server-side processing**: Encryption/decryption handled on the server side, avoiding exposure of sensitive information in the frontend

### 3. Data Security

- **Access control**: Database access control and encryption, limiting database access permissions
- **Regular backups**: Automated periodic backups to ensure data is not lost
- **Sensitive data protection**: Sensitive data stored in encrypted form to protect user privacy

### 4. User Privacy

- **Compliance**: Complies with GDPR and other privacy regulations to protect user rights
- **Transparent policies**: Clear data usage and collection policies to gain user trust
- **Data control**: User data export and deletion capabilities, giving users control over their data

## 🚢 Deployment Architecture

### 1. Development Environment

- **Docker Compose**: Local development environment containing all necessary services
- **Hot reloading**: Using nodemon to make code changes take effect immediately
- **Environment variables**: Using dotenv to manage configurations for different environments

### 2. Production Environment

- **Frontend deployment**: Using Vercel to deploy Next.js application
- **Backend deployment**: Using Railway or Render to deploy Express application
- **Database**: Using managed PostgreSQL services provided by Supabase or Railway

### 3. CI/CD Pipeline

- **Automated testing**: Using Jest for unit testing and integration testing
- **Automated deployment**: GitHub Actions or Vercel automated deployment processes
- **Environment isolation**: Development, testing, and production environments are isolated

## 📈 Performance Optimization

### 1. Database Optimization

- **Index optimization**: Creating appropriate indexes for commonly queried fields
- **JSONB indexing**: Creating GIN indexes for JSONB fields to optimize JSON data queries
- **Table partitioning**: Using table partitioning for large tables to improve query performance
- **Query optimization**: Using PostgreSQL's query planning and execution statistics to analyze and optimize SQL queries

### 2. API Performance

- **Response compression**: Using compression middleware to reduce data transmission volume
- **Caching strategy**: Using in-memory caching for frequently accessed data
- **Pagination handling**: All list interfaces implement pagination to avoid large data transfers

### 3. Resource Optimization

- **Static resources**: Using CDN to distribute static resources
- **On-demand loading**: API interfaces return data on-demand, reducing unnecessary data transmission
- **Asynchronous processing**: Time-consuming operations use asynchronous processing to avoid blocking the main thread

## 🔄 System Integration

### 1. Exchange API Integration

- **Modular design**: Each exchange is a separate module, making it easy to add new exchanges
- **Major exchange support**:
  - Binance API - World's largest cryptocurrency exchange
  - OKX API - Global trading platform
  - Bybit API - Platform focused on derivative trading
  - Bitget API - Emerging exchange supporting spot and contract trading

### 2. Third-party Service Integration

- **Notification service**: SendGrid (email) API integration
- **File storage**: AWS S3 or Firebase Storage for storing user-uploaded files
- **Social login**: Integration with Google and GitHub OAuth authentication

## 🚀 Scalability Considerations

### 1. Code Structure

- **Modular design**: Adopting modular design to facilitate feature expansion
- **Dependency injection**: Using dependency injection to simplify testing and expansion
- **Interface abstraction**: Isolating implementation details through interface abstraction

### 2. Database Scalability

- **Connection pool management**: Optimizing database connection pool configuration to support more concurrent connections
- **Read/write separation**: Future consideration of PostgreSQL master-slave replication for read/write separation
- **Database sharding**: For large-scale data growth, considering using extensions like Citus for data sharding

### 3. Future Service Separation

- **Microservice preparation**: Although initially adopting a monolithic application, code organization supports future splitting into microservices
- **Domain-driven design**: Organizing code by business domain for easier future migration
- **Independent data storage**: Different business modules use independent schemas to reduce coupling

---

<div align="center">
  <p>© 2025 Homunculus Backend Architecture - Stable and Reliable Technical Foundation</p>
</div> 