// Language type
export type Language = 'en' | 'zh';

// Translations interface
export interface Translations {
  // Navigation bar
  appName: string;
  enterApp: string;
  themeSettings: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  learnMore: string;
  
  // Features section
  featuresTitle: string;
  featuresSubtitle: string;
  featureIntegration: {
    title: string;
    description: string;
  };
  featureAnalysis: {
    title: string;
    description: string;
  };
  featureVisualization: {
    title: string;
    description: string;
  };
  featureJournal: {
    title: string;
    description: string;
  };
  
  // Showcase section
  showcaseTitle?: string;
  showcaseSubtitle?: string;
  showcaseTitle1?: string;
  showcaseDesc1?: string;
  showcaseTitle2?: string;
  showcaseDesc2?: string;
  showcaseTitle3?: string;
  showcaseDesc3?: string;
  showcaseTitle4?: string;
  showcaseDesc4?: string;
  
  // App download section
  downloadTitle?: string;
  downloadSubtitle?: string;
  windowsClient?: string;
  windowsDesc?: string;
  iosApp?: string;
  iosDesc?: string;
  androidApp?: string;
  androidDesc?: string;
  comingSoon?: string;
  comingToAppStore?: string;
  comingToGooglePlay?: string;
  
  // Footer navigation
  companyTitle?: string;
  aboutUs?: string;
  contactUs?: string;
  newsCenter?: string;
  careers?: string;
  
  productTitle?: string;
  changelog?: string;
  roadmap?: string;
  apiDocs?: string;
  helpCenter?: string;
  
  communityTitle?: string;
  community?: string;
  devForum?: string;
  discord?: string;
  techBlog?: string;
  
  legalTitle?: string;
  legal?: string;
  terms?: string;
  privacy?: string;
  disclaimer?: string;
  
  // About us
  aboutTitle: string;
  aboutSubtitle: string;
  aboutContent1: string;
  aboutContent2: string;
  aboutContent3: string;
  tryNow: string;
  
  // Footer
  footerText: string;
  
  // Color schemes
  colorSchemes: {
    default: string;
    deepOcean: string;
    earthForest: string;
    earth: string;
  };
  
  // Version information
  version: string;
  versionFeatures: string[];
  
  // Dashboard
  dashboard: string;
  home: string;
  totalAssets: string;
  todayProfitLoss: string;
  totalTrades: string;
  winRate: string;
  profitTrend: string;
  recentTrades: string;
  tradeDistribution: string;
  
  // Navigation menu
  mainFeatures: string;
  dataAnalysis: string;
  trades: string;
  profitLossAnalysis: string;
  winRateAnalysis: string;
  maxDrawdown: string;
  tradeJournal: string;
  financialReports: string;
  userCenter: string;
}

// English translation
export const en: Translations = {
  // Navigation bar
  appName: 'Homunculus',
  enterApp: 'Enter App',
  themeSettings: 'Theme Settings',
  
  // Hero section
  heroTitle: 'Homunculus - Intelligent Trading Analysis',
  heroSubtitle: 'Data-Driven Trading Decisions',
  heroDescription: 'Homunculus is an advanced analytics tool designed for cryptocurrency traders to analyze trading history, identify patterns, optimize strategies, and achieve better trading results.',
  getStarted: 'Get Started',
  learnMore: 'Learn More',
  
  // Features section
  featuresTitle: 'Four Core Advantages',
  featuresSubtitle: 'Enhance Your Trading Analysis Capabilities',
  featureIntegration: {
    title: 'Extensive Data Sources',
    description: 'Support for multiple exchange data import, providing a comprehensive trading view and easy management of multi-platform assets.'
  },
  featureAnalysis: {
    title: 'Complex Trading Analysis',
    description: 'In-depth analysis of each trade\'s performance, understanding profit and loss reasons, and finding the best entry and exit points.'
  },
  featureVisualization: {
    title: 'Elegant Data Visualization',
    description: 'Intuitive charts displaying trading history and performance metrics, helping you quickly grasp trends and patterns.'
  },
  featureJournal: {
    title: 'Detailed Trading Records',
    description: 'Record and review the thinking process for each trade, build your personal trading system, and continuously optimize your strategy.'
  },
  
  // Showcase section
  showcaseTitle: 'Feature Showcase',
  showcaseSubtitle: 'Explore the powerful features of Homunculus',
  showcaseTitle1: 'Trading Analysis Features',
  showcaseDesc1: 'Powerful trading data analysis tools to help you understand market trends and patterns',
  showcaseTitle2: 'Real-time Data Demo',
  showcaseDesc2: 'Providing real-time market data to ensure your decisions are based on the latest information',
  showcaseTitle3: 'User Testimonials',
  showcaseDesc3: 'Real experiences and success stories from traders around the world',
  showcaseTitle4: 'Data Security Guarantee',
  showcaseDesc4: 'Using the highest level of encryption technology to ensure your trading data is secure',
  
  // App download section
  downloadTitle: 'Download Homunculus App',
  downloadSubtitle: 'App download feature coming soon. You\'ll be able to use our trading analysis tools on various devices.',
  windowsClient: 'Windows Client',
  windowsDesc: 'For Windows 10 and above',
  iosApp: 'iOS App',
  iosDesc: 'For iPhone and iPad',
  androidApp: 'Android App',
  androidDesc: 'For all Android devices',
  comingSoon: 'Coming Soon',
  comingToAppStore: 'Coming to App Store',
  comingToGooglePlay: 'Coming to Google Play',
  
  // Footer navigation
  companyTitle: 'Company',
  aboutUs: 'About Us',
  contactUs: 'Contact Us',
  newsCenter: 'News Center',
  careers: 'Join Us',
  
  productTitle: 'Product',
  changelog: 'Changelog',
  roadmap: 'Roadmap',
  apiDocs: 'API Documentation',
  helpCenter: 'Help Center',
  
  communityTitle: 'Community',
  community: 'Community',
  devForum: 'Developer Forum',
  discord: 'Discord',
  techBlog: 'Tech Blog',
  
  legalTitle: 'Legal',
  legal: 'Legal',
  terms: 'Terms of Service',
  privacy: 'Privacy Policy',
  disclaimer: 'Disclaimer',
  
  // About us
  aboutTitle: 'About Us',
  aboutSubtitle: 'We are a group of developers passionate about cryptocurrency and data analysis, dedicated to providing traders with the best analytical tools.',
  aboutContent1: 'The core philosophy of the Homunculus platform is "Data-driven trading, insights into market opportunities." We believe that through in-depth analysis of trading data, traders can discover their trading patterns and regularities, thereby optimizing trading strategies and improving profitability.',
  aboutContent2: 'Our platform design focuses on user experience and data visualization, transforming complex trading data into intuitive charts and indicators, helping traders quickly understand their trading performance, identify problems and opportunities.',
  aboutContent3: 'The security design of the platform is noteworthy. We only use read-only API access to exchange data or CSV documents exported from exchanges, ensuring user fund security while providing comprehensive analytical capabilities. We do not sell user data or profit from it in any way.',
  tryNow: 'Try Now',
  
  // Footer
  footerText: '© 2025 Homunculus.com - Empowering Data-Driven Traders',
  
  // Color schemes
  colorSchemes: {
    default: 'Default Blue',
    deepOcean: 'Deep Ocean Dawn',
    earthForest: 'Earth Forest',
    earth: 'Earth Tones',
  },
  
  // Version information
  version: 'Version',
  versionFeatures: [
    'Enhanced theme system with 9 color schemes',
    'Improved UI design and interactive components',
    'Added font customization options',
    'Optimized dashboard layout and cards',
    'Fixed theme-related rendering issues'
  ],
  
  // Dashboard
  dashboard: 'Dashboard',
  home: 'Home',
  totalAssets: 'Total Assets',
  todayProfitLoss: 'Today\'s Profit/Loss',
  totalTrades: 'Total Trades',
  winRate: 'Win Rate',
  profitTrend: 'Profit Trend',
  recentTrades: 'Recent Trades',
  tradeDistribution: 'Trade Distribution',
  
  // Navigation menu
  mainFeatures: 'Main Features',
  dataAnalysis: 'Data Analysis',
  trades: 'Trades',
  profitLossAnalysis: 'Profit/Loss Analysis',
  winRateAnalysis: 'Win Rate Analysis',
  maxDrawdown: 'Maximum Drawdown',
  tradeJournal: 'Trade Journal',
  financialReports: 'Financial Reports',
  userCenter: 'User Center',
};

// Chinese translation
export const zh: Translations = {
  // Navigation bar
  appName: 'Homunculus',
  enterApp: '进入应用',
  themeSettings: '主题设置',
  
  // Hero section
  heroTitle: 'Homunculus - 智能交易分析',
  heroSubtitle: '为您的交易决策提供数据支持',
  heroDescription: 'Homunculus 是一款专为加密货币交易者打造的高级分析工具，帮助您分析交易历史、识别模式、优化策略，实现更好的交易结果。',
  getStarted: '开始使用',
  learnMore: '了解更多',
  
  // Features section
  featuresTitle: '四大核心优势',
  featuresSubtitle: '全方位提升您的交易分析能力',
  featureIntegration: {
    title: '广泛数据源',
    description: '支持多家交易所数据导入，提供全面的交易视图，轻松管理多平台资产。'
  },
  featureAnalysis: {
    title: '复杂交易分析',
    description: '深入分析每笔交易的表现，了解盈亏原因，找出最佳入场点和出场点。'
  },
  featureVisualization: {
    title: '优雅数据可视化',
    description: '通过直观的图表展示交易历史和绩效指标，助您快速把握趋势和模式。'
  },
  featureJournal: {
    title: '详细交易记录',
    description: '记录和回顾每笔交易的思考过程，打造个人交易系统，不断优化您的策略。'
  },
  
  // Showcase section
  showcaseTitle: '功能展示',
  showcaseSubtitle: '探索 Homunculus 的强大功能和特性',
  showcaseTitle1: '交易分析功能',
  showcaseDesc1: '强大的交易数据分析工具，帮助您洞察市场趋势和模式',
  showcaseTitle2: '实时数据演示',
  showcaseDesc2: '提供实时市场数据，确保您的决策基于最新信息',
  showcaseTitle3: '用户见证',
  showcaseDesc3: '来自全球交易者的真实体验和成功案例分享',
  showcaseTitle4: '数据安全保障',
  showcaseDesc4: '采用最高级别的加密技术，确保您的交易数据安全',
  
  // App download section
  downloadTitle: '下载 Homunculus 应用',
  downloadSubtitle: '应用下载功能即将推出，敬请期待。您将能够在各种设备上使用我们的交易分析工具。',
  windowsClient: 'Windows 客户端',
  windowsDesc: '适用于 Windows 10 及以上版本',
  iosApp: 'iOS App',
  iosDesc: '适用于 iPhone 和 iPad',
  androidApp: 'Android App',
  androidDesc: '适用于所有 Android 设备',
  comingSoon: '即将推出',
  comingToAppStore: '即将上架 App Store',
  comingToGooglePlay: '即将上架 Google Play',
  
  // Footer navigation
  companyTitle: '公司',
  aboutUs: '关于我们',
  contactUs: '联系方式',
  newsCenter: '新闻中心',
  careers: '加入我们',
  
  productTitle: '产品',
  changelog: '更新日志',
  roadmap: '路线图',
  apiDocs: 'API 文档',
  helpCenter: '帮助中心',
  
  communityTitle: '社区',
  community: '社区',
  devForum: '开发者论坛',
  discord: 'Discord',
  techBlog: '技术博客',
  
  legalTitle: '法律',
  legal: '法律',
  terms: '服务条款',
  privacy: '隐私政策',
  disclaimer: '免责声明',
  
  // About us
  aboutTitle: '关于我们',
  aboutSubtitle: '我们是一群热爱加密货币和数据分析的开发者，致力于为交易者提供最好的分析工具。',
  aboutContent1: 'Homunculus 平台的核心理念是"数据驱动交易，洞察市场先机"。我们相信，通过深入分析交易数据，交易者可以发现自己的交易模式和规律，从而优化交易策略，提高盈利能力。',
  aboutContent2: '我们的平台设计注重用户体验和数据可视化，将复杂的交易数据转化为直观易懂的图表和指标，帮助交易者快速理解自己的交易表现，发现问题和机会。',
  aboutContent3: '平台的安全设计值得注意，我们仅使用只读 API 访问交易所数据或交易所导出的 CSV 文档，确保用户资金安全的同时提供全面的分析能力。我们不会出售用户数据或以任何方式从中获利。',
  tryNow: '立即体验',
  
  // Footer
  footerText: '© 2025 Homunculus.com - 赋能数据驱动的交易者',
  
  // Color schemes
  colorSchemes: {
    default: '默认蓝色',
    deepOcean: '深海晨光',
    earthForest: '大地森林',
    earth: '大地色系',
  },
  
  // Version information
  version: '版本',
  versionFeatures: [
    'Enhanced theme system with 9 color schemes',
    'Improved UI design and interactive components',
    'Added font customization options',
    'Optimized dashboard layout and cards',
    'Fixed theme-related rendering issues'
  ],
  
  // Dashboard
  dashboard: '仪表盘',
  home: '首页',
  totalAssets: '总资产',
  todayProfitLoss: '今日盈亏',
  totalTrades: '总交易次数',
  winRate: '胜率',
  profitTrend: '盈亏趋势',
  recentTrades: '最近交易',
  tradeDistribution: '交易分布',
  
  // Navigation menu
  mainFeatures: '主要功能',
  dataAnalysis: '数据分析',
  trades: '交易记录',
  profitLossAnalysis: '盈亏分析',
  winRateAnalysis: '胜率分析',
  maxDrawdown: '最大回撤',
  tradeJournal: '交易日志',
  financialReports: '财务报告',
  userCenter: '用户中心',
};

// Get translations
export const getTranslations = (language: Language): Translations => {
  return language === 'en' ? en : zh;
}; 