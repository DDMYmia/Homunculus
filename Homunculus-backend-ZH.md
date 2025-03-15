# 🔧 Homunculus 后端架构设计

<div align="center">
  <p><strong>稳定 · 高效 · 可扩展</strong></p>
  <p>支撑新一代加密货币交易分析平台的技术基础</p>
</div>

## 📡 架构概述

Homunculus 后端采用轻量化的模块化架构设计，以提高系统的可维护性、可扩展性和可靠性。系统由以下主要部分组成：

- **客户端层**：基于 React 和 Next.js 的前端应用
- **API 层**：Node.js + Express.js 实现的 RESTful API
- **核心服务层**：
  - 认证与用户服务
  - 交易数据服务
  - 分析服务
  - 通知服务
  - 文件存储服务
- **数据层**：PostgreSQL 单一数据库架构

这种设计在保持功能完整性的同时，简化了架构复杂度，特别适合个人开发者维护的项目。

## 🛠️ 技术栈选择

### 1. 主框架

- **Node.js + Express.js**：轻量高效的 Web 服务器框架，易于开发和维护
- **TypeScript**：类型安全的 JavaScript 超集，提高代码质量和可维护性

### 2. 数据库

- **PostgreSQL**：全功能关系型数据库，支持结构化和非结构化数据
  - JSONB 类型存储非结构化数据（如原始交易记录、用户笔记）
  - 传统表结构存储关系型数据（用户信息、配置）
  - TimescaleDB 扩展高效处理时间序列数据（价格历史）
- **Prisma ORM**：现代化 ORM 工具，简化数据库操作，提供类型安全的查询接口

### 3. 认证

- **JWT**：无状态认证，简化分布式系统中的认证
- **NextAuth.js**：全面的认证解决方案，支持多种认证策略
- **bcrypt**：密码加密，保护敏感用户信息

### 4. API 设计

- **RESTful API**：主要 API 设计风格，使用简单，支持广泛
- **WebSocket**：提供实时数据更新，适用于价格和交易数据实时推送
- **Express 中间件**：自定义中间件用于请求验证、认证和错误处理

### 5. 安全

- **Helmet**：设置 HTTP 头以增强安全性，防止常见 Web 漏洞
- **CORS**：跨域资源共享，安全配置 API 访问权限
- **速率限制**：API 请求速率限制，防止滥用和攻击
- **输入验证**：使用 Express Validator 验证所有用户输入，防止注入攻击

### 6. 日志与监控

- **Winston**：灵活的日志工具，支持多级别日志和输出格式
- **Morgan**：HTTP 请求日志中间件，用于监控 API 访问
- **Pino**：高性能日志工具，适用于生产环境

### 7. 部署

- **Docker**：容器化应用部署，简化环境配置
- **Vercel/Netlify**：Next.js 前端部署
- **Railway/Render**：后端服务部署

## 🏗️ 核心模块设计

### 1. 用户管理服务

#### 功能：
- 用户注册、登录、密码重置 - 处理用户认证流程
- 用户资料管理 - 存储和更新用户个人信息
- 会员等级和权限管理 - 控制功能访问和高级功能
- 社交媒体账号关联 - 支持第三方账号登录和集成

#### API 端点示例：
```
POST /api/auth/register - 用户注册
POST /api/auth/login - 用户登录
GET /api/users/profile - 获取用户资料
PUT /api/users/profile - 更新用户资料
```

### 2. 交易所集成服务

#### 功能：
- 交易所 API 密钥管理 - 安全存储和使用 API 凭证
- 从各交易所获取数据 - 自动同步交易和市场数据
- CSV 交易数据导入 - 支持手动导入历史交易记录
- 数据标准化和清洗 - 统一不同交易所的数据格式

#### API 端点示例：
```
POST /api/exchanges/connect - 添加交易所 API
GET /api/exchanges/list - 获取已连接交易所
POST /api/exchanges/import - 导入 CSV 数据
GET /api/exchanges/sync-status - 检查同步状态
```

### 3. 交易数据服务

#### 功能：
- 存储和管理交易记录 - 维护完整交易历史
- 提供交易历史查询 - 支持各种过滤条件和分析
- 交易标签和笔记管理 - 允许用户组织和注释交易
- 交易绩效指标计算 - 自动生成关键绩效指标

#### API 端点示例：
```
GET /api/trades - 获取交易列表
GET /api/trades/:id - 获取单个交易详情
POST /api/trades/:id/notes - 添加交易笔记
GET /api/trades/statistics - 获取交易统计
```

### 4. 分析服务

#### 功能：
- 计算交易绩效指标 - 分析盈亏率、回撤、平均收益等
- 生成各类分析报告 - 提供全面的交易绩效分析
- 风险评估和管理 - 评估交易风险并提供建议
- 图表和数据可视化准备 - 提供格式化数据用于前端显示

#### API 端点示例：
```
GET /api/analytics/performance - 获取绩效分析
GET /api/analytics/risk - 获取风险评估
GET /api/analytics/calendar - 获取日历视图数据
GET /api/analytics/patterns - 发现交易模式
```

### 5. 通知服务

#### 功能：
- 系统通知和提醒 - 发送平台更新和重要信息
- 邮件集成 - 使用 Nodemailer 发送通知
- 价格和事件提醒 - 根据用户设置发送市场提醒
- 用户活动日志 - 记录用户操作历史

#### API 端点示例：
```
GET /api/notifications - 获取用户通知
POST /api/alerts/create - 创建价格提醒
PUT /api/notifications/:id/read - 标记通知为已读
GET /api/activity-log - 获取活动日志
```

### 6. 文件存储服务

#### 功能：
- 管理用户上传图片 - 存储交易截图和头像
- 存储交易截图和图表 - 支持交易记录文档化
- 导出和报告生成 - 创建可下载的分析报告
- 云存储集成 - 使用 AWS S3 或类似服务进行文件存储

#### API 端点示例：
```
POST /api/files/upload - 上传文件
GET /api/files/:id - 获取文件
POST /api/reports/generate - 生成报告
GET /api/reports/download/:id - 下载报告
```

## 💾 数据库设计

### PostgreSQL 表结构

#### 1. 用户表
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  subscription JSONB DEFAULT '{"plan": "free", "status": "active"}',
  preferences JSONB DEFAULT '{"theme": "dark", "colorScheme": "default", "language": "zh", "timezone": "UTC"}'
);
```

#### 2. 交易所连接表
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

#### 3. 交易表
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
  tags TEXT[],
  status VARCHAR(20) NOT NULL,
  original_data JSONB
);
```

#### 4. 交易笔记表
```sql
CREATE TABLE trade_notes (
  id SERIAL PRIMARY KEY,
  trade_id INTEGER REFERENCES trades(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  images TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5. 资产表
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

#### 6. 价格历史表
```sql
-- 需要 TimescaleDB 扩展
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

-- 转换为超表
SELECT create_hypertable('price_history', 'time');
```

#### 7. 通知表
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

## 🔐 安全设计

### 1. API 安全

- **认证要求**：所有 API 端点都需要 JWT 认证，确保只有授权用户可以访问
- **传输加密**：使用 HTTPS 加密防止数据拦截
- **请求限制**：API 请求速率限制防止滥用和攻击
- **输入验证**：Express Validator 验证所有用户输入防止注入攻击

### 2. 交易所 API 密钥保护

- **加密存储**：API 密钥使用环境变量配置的加密密钥进行加密
- **最小权限**：仅请求所需的最小权限（只读访问）以降低安全风险
- **服务器端处理**：加密/解密在服务器端处理，避免前端暴露敏感信息

### 3. 数据安全

- **访问控制**：数据库访问控制和加密，限制数据库访问权限
- **定期备份**：自动定期备份确保数据不会丢失
- **敏感数据保护**：敏感数据以加密形式存储以保护用户隐私

### 4. 用户隐私

- **合规性**：符合 GDPR 等隐私法规保护用户权利
- **透明政策**：清晰的数据使用和收集政策以获得用户信任
- **数据控制**：用户数据导出和删除功能，让用户控制自己的数据

## 🚢 部署架构

### 1. 开发环境

- **Docker Compose**：本地开发环境包含所有必要服务
- **热重载**：使用 nodemon 使代码更改立即生效
- **环境变量**：使用 dotenv 管理不同环境的配置

### 2. 生产环境

- **前端部署**：使用 Vercel 部署 Next.js 应用
- **后端部署**：使用 Railway 或 Render 部署 Express 应用
- **数据库**：使用 Supabase 或 Railway 提供的托管 PostgreSQL 服务

### 3. CI/CD 流程

- **自动化测试**：使用 Jest 进行单元测试和集成测试
- **自动化部署**：GitHub Actions 或 Vercel 自动化部署流程
- **环境隔离**：开发、测试和生产环境相互隔离

## 📈 性能优化

### 1. 数据库优化

- **索引优化**：为常用查询字段创建适当的索引
- **JSONB 索引**：为 JSONB 字段创建 GIN 索引以优化 JSON 数据查询
- **表分区**：对大表使用表分区以提高查询性能
- **查询优化**：使用 PostgreSQL 的查询计划和执行统计分析优化 SQL 查询

### 2. API 性能

- **响应压缩**：使用压缩中间件减少数据传输量
- **缓存策略**：对频繁访问的数据使用内存缓存
- **分页处理**：所有列表接口实现分页以避免大数据传输

### 3. 资源优化

- **静态资源**：使用 CDN 分发静态资源
- **按需加载**：API 接口按需返回数据，减少不必要的数据传输
- **异步处理**：耗时操作使用异步处理避免阻塞主线程

## 🔄 系统集成

### 1. 交易所 API 集成

- **模块化设计**：每个交易所作为独立模块，便于添加新交易所
- **主要交易所支持**：
  - 币安 API - 全球最大加密货币交易所
  - OKX API - 全球交易平台
  - Bybit API - 专注衍生品交易的平台
  - Bitget API - 新兴交易所支持现货和合约交易

### 2. 第三方服务集成

- **通知服务**：SendGrid（邮件）API 集成
- **文件存储**：AWS S3 或 Firebase Storage 存储用户上传文件
- **社交登录**：集成 Google 和 GitHub OAuth 认证

## 🚀 可扩展性考虑

### 1. 代码结构

- **模块化设计**：采用模块化设计便于功能扩展
- **依赖注入**：使用依赖注入简化测试和扩展
- **接口抽象**：通过接口抽象隔离实现细节

### 2. 数据库可扩展性

- **连接池管理**：优化数据库连接池配置以支持更多并发连接
- **读写分离**：未来考虑 PostgreSQL 主从复制实现读写分离
- **数据分片**：对于大规模数据增长，考虑使用 Citus 等扩展进行数据分片

### 3. 未来服务拆分

- **微服务准备**：虽然初期采用单体应用，但代码组织支持未来拆分为微服务
- **领域驱动设计**：按业务领域组织代码便于未来迁移
- **独立数据存储**：不同业务模块使用独立的 schema 减少耦合

---

<div align="center">
  <p>© 2025 Homunculus 后端架构 - 稳定可靠的技术基础</p>
</div> 